import {mergeAttempts} from './core.js?v=2.2';
import {spanishJournalTopics} from './spanish.js?v=2.4';

const parisDate = new Intl.DateTimeFormat('fr-CA', {
  timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit'
});

export function journalDate(date = new Date()) {
  const parts = Object.fromEntries(parisDate.formatToParts(date).map(({type,value}) => [type,value]));
  return [parts.year, parts.month, parts.day].join('-');
}

export function dailyJournal(courses, attempts, day) {
  const labels = new Map(spanishJournalTopics);
  for (const course of courses) {
    for (const question of course.questions) {
      labels.set(question.id, {
        subject: course.subject, topic: question.topic, tip: question.memo || ''
      });
    }
  }
  const activity = mergeAttempts([], attempts).filter(a => journalDate(new Date(a.at)) === day);
  const first = new Map();
  const last = new Map();
  let written = 0;
  for (const attempt of activity) {
    if (attempt.selfAssessed) {
      written++;
      continue;
    }
    if (!first.has(attempt.questionId)) first.set(attempt.questionId, attempt);
    last.set(attempt.questionId, attempt);
  }
  const topics = new Map();
  for (const [id, attempt] of first) {
    const label = labels.get(id) || {subject: 'Autre activité', topic: 'Exercice', tip: ''};
    const key = JSON.stringify([label.subject, label.topic]);
    const entry = topics.get(key) || {...label, total: 0, correct: 0, unresolved: 0, recovered: 0};
    entry.total++;
    entry.correct += Number(attempt.correct);
    if (!last.get(id).correct) {
      entry.unresolved++;
      if (label.tip) entry.tip = label.tip;
    } else if (!attempt.correct) {
      entry.recovered++;
    }
    topics.set(key, entry);
  }
  const rows = [...topics.values()];
  const positives = rows.filter(row => row.correct || row.recovered).map(row => {
    const fixed = row.recovered ? ` · ${row.recovered} corrigée(s) après un nouvel essai` : '';
    return `- ${row.subject} · ${row.topic} — ${row.correct}/${row.total} au premier essai${fixed}.`;
  });
  const priorities = rows.filter(row => row.unresolved || row.recovered)
    .sort((a,b) => b.unresolved - a.unresolved || b.recovered - a.recovered)
    .slice(0,3)
    .map(row => {
      const action = row.unresolved
        ? `${row.unresolved} réponse(s) encore incorrecte(s). ${row.tip ? row.tip + ' ' : ''}Refaire un exemple ensemble.`
        : 'Réponse corrigée après un nouvel essai. Proposer un exemple sans aide.';
      return `- ${row.subject} · ${row.topic} — ${action}`;
    });
  const tally = rows.map(row => `- ${row.subject} · ${row.topic} — ${row.total} question(s) distincte(s).`);
  return [
    `Journal de révisions de Louise — ${day}`,
    'Données enregistrées sur cet appareil ou déjà synchronisées avec ce compte.',
    '',
    'Travail enregistré',
    activity.length ? `${activity.length} réponse(s), dont ${written} production(s) à relire ou autoévaluée(s).` : 'Aucune réponse enregistrée pour cette journée.',
    ...tally,
    '',
    'Réussites',
    ...(positives.length ? positives : ['Aucune réussite mesurée par les questions corrigées pour cette journée.']),
    '',
    'À revoir ensemble ce soir',
    ...(priorities.length ? priorities : ['Aucun point faible repéré dans les réponses corrigées de la journée.']),
    ...(written ? ['- Relire les productions écrites et demander à Louise d’expliquer un choix.'] : []),
    '',
    'Pour vérifier ce qui est retenu, demander à Louise d’expliquer une règle et de refaire un exemple sans la fiche.'
  ].join('\n');
}
