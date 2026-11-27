export const englishExamId = 'english-semester-2';
const title = 'Examen blanc d’anglais · Semestre 2';
const passage = 'Last Saturday, Maya and her brother Leo took a bus from Bristol to a park near the city. They planned to have a picnic, but it started to rain at eleven. They ate their sandwiches in the visitor centre instead. After lunch, Maya borrowed a map and followed a short trail with Leo. They found a pond and saw three ducks. Next month, Maya wants to come back with her friend Aisha because Aisha loves birds.';
const groups = [
  ['Vocabulaire', [
    ['a trail', ['un sentier','un arrêt','une colline'], 0, 'A trail est un sentier que l’on peut suivre à pied.'],
    ['to borrow', ['rendre','emprunter','oublier'], 1, 'To borrow signifie emprunter. To lend signifie prêter.'],
    ['next month', ['le mois dernier','chaque mois','le mois prochain'], 2, 'Next annonce ce qui vient. Last renvoie à la période passée.'],
    ['a pond', ['une mare','un pont','un chemin'], 0, 'A pond désigne une mare ou un petit étang.']
  ]],
  ['Grammaire', [
    ['Yesterday, we … a bus to town.', ['take','took','takes'], 1, 'Yesterday indique un moment passé. Le prétérit de take est took.'],
    ['They … play outside because it rained.', ['didn’t','don’t','aren’t'], 0, 'Au prétérit négatif, on utilise didn’t suivi de la base verbale play.'],
    ['… Maya see ducks?', ['Does','Was','Did'], 2, 'Pour poser une question au prétérit, on utilise Did + sujet + base verbale.'],
    ['Look! It … now.', ['rained','is raining','rain'], 1, 'Pour une action en cours, on utilise be au présent et le verbe en -ing.'],
    ['We … visit the park next Sunday. Our tickets are ready.', ['are going to','went to','going'], 0, 'Pour parler d’un projet, utilise be going to suivi du verbe à l’infinitif sans to supplémentaire.'],
    ['This trail is … than the other one.', ['shortest','more short','shorter'], 2, 'Pour comparer avec un adjectif court, on ajoute -er et on emploie than.']
  ]],
  ['Compréhension écrite', [
    ['When did Maya and Leo go to the park?', ['Last Sunday','Last Saturday','Next month'], 1, 'La première phrase commence par « Last Saturday ».'],
    ['How did they get there?', ['By bus','By bike','On foot'], 0, '« Took a bus » indique qu’ils ont pris le bus.'],
    ['Why did their picnic plans change?', ['They forgot the food','The park was closed','It started to rain'], 2, 'Le mot « but » introduit le changement de programme dû à la pluie.'],
    ['Where did they eat their sandwiches?', ['Near the pond','In the visitor centre','On the bus'], 1, 'Repère « in the visitor centre instead » après l’annonce de la pluie.'],
    ['What did Maya borrow after lunch?', ['A map','An umbrella','A book'], 0, 'Le texte dit « Maya borrowed a map ».'],
    ['Why does Maya want to go back with Aisha?', ['Aisha lives near the park','Aisha has a map','Aisha loves birds'], 2, 'La dernière phrase donne la raison après « because ».']
  ]]
];

const items = groups.flatMap(([topic, questions], section) => questions.map(([prompt, options, answer, memo], index) =>
  ({id: englishExamId + '-' + section + '-' + index, topic, prompt, options, answer, memo})
));
const writingId = englishExamId + '-writing';
const criteria = [
  'J’ai écrit 6 à 8 phrases et précisé où, quand et avec qui je suis sortie.',
  'J’ai raconté deux actions avec des verbes au prétérit.',
  'J’ai relié des idées avec then, but ou because.',
  'J’ai annoncé un projet avec am going to et mes phrases sont compréhensibles.'
];

export const englishExamTopics = items.map(item => [item.id, {subject:'Anglais',topic:item.topic,tip:item.memo}]);

function pastScores(attempts) {
  const runs = new Map();
  for (const entry of attempts) {
    if (entry.meta?.courseId !== englishExamId || !entry.meta.runId) continue;
    const run = runs.get(entry.meta.runId) || {at:entry.at, correct:0, writing:null};
    if (entry.questionId === writingId) run.writing = Number(entry.response.slice(0,1));
    else if (entry.correct) run.correct++;
    runs.set(entry.meta.runId, run);
  }
  return [...runs.values()].filter(run => run.writing !== null).reverse().slice(0,5);
}

export function englishExamView(attempts, canSave) {
  const scores = pastScores(attempts);
  return `<div class="intro"><div><div class="eyebrow">ANGLAIS · 5e</div><h1>${title}</h1>
  <p>35 minutes · vocabulaire 4 points · grammaire 6 points · lecture 6 points · rédaction 4 points.</p>
  <a href="#weekly">Ma semaine d’anglais</a></div></div>
  <section class="card"><h2>Mes derniers résultats</h2>${scores.length ?
    '<ul>' + scores.map(s => `<li>${new Date(s.at).toLocaleDateString('fr-FR')} · ${s.correct+s.writing}/20 (questions ${s.correct}/16, rédaction autoévaluée ${s.writing}/4)</li>`).join('') + '</ul>' : '<p>Aucune tentative enregistrée pour cet examen.</p>'}
  ${canSave ? '' : '<p>Utilise le compte élève pour enregistrer un résultat.</p>'}</section>
  <form id="english-semester-form">
    ${groups.map(([topic], section) => `<section class="card"><h2>${topic}</h2>
      ${section===2 ? `<p lang="en">${passage}</p>` : ''}
      ${items.filter(item => item.topic===topic).map(item => `<p><label for="${item.id}" lang="en">${item.prompt}</label><br>
        <select name="${item.id}" id="${item.id}" required><option value="">Choisis une réponse</option>
        ${item.options.map((option,index) => `<option value="${index}" lang="${section===0?'fr':'en'}">${option}</option>`).join('')}</select></p>`).join('')}</section>`).join('')}
    <section class="card"><h2>Rédaction libre</h2>
      <p><label for="english-writing">En 6 à 8 phrases en anglais, raconte une sortie réelle ou imaginée. Indique où, quand et avec qui. Raconte deux actions passées. Relie tes idées et termine par un projet pour ta prochaine sortie.</label></p>
      <textarea id="english-writing" name="writing" lang="en" rows="8" maxlength="4000" required></textarea>
      <p><button class="button" type="submit">Voir le corrigé détaillé</button></p>
    </section>
  </form>
  <section id="english-semester-result" aria-label="Correction" tabindex="-1"></section>`;
}

export function bindEnglishExam(saveExam, canSave) {
  const form = document.querySelector('#english-semester-form');
  const result = document.querySelector('#english-semester-result');
  const writingField = form.elements.namedItem('writing');
  writingField.addEventListener('input', () => writingField.setCustomValidity(''));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(form);
    const writing = values.get('writing').trim();
    if (!writing) {
      writingField.setCustomValidity('Écris ta rédaction avant de voir le corrigé.');
      writingField.reportValidity();
      return;
    }
    const answers = items.map(item => ({
      questionId:item.id, correct:Number(values.get(item.id))===item.answer,
      selfAssessed:false, response:item.options[Number(values.get(item.id))]
    }));
    const points = answers.filter(answer => answer.correct).length;
    for (const control of form.elements) control.disabled = true;
    result.innerHTML = `<article class="card"><h2>Corrigé détaillé</h2>
      <p><strong>${points}/16</strong> pour les questions corrigées automatiquement.</p>
      ${groups.map(([topic]) => `<details><summary>${topic}</summary><ul>
        ${items.map((item,i) => ({item,answer:answers[i]})).filter(({item}) => item.topic===topic)
          .map(({item,answer}) => `<li><strong>${item.prompt}</strong><br>Ta réponse : ${answer.response} · ${answer.correct?'Correct':'À revoir'}<br>Correction : ${item.options[item.answer]}. ${item.memo}</li>`).join('')}
        </ul></details>`).join('')}
      <h3>Modèle de rédaction</h3>
      <p lang="en">Last Sunday, I went to a museum in Bristol with my cousin. We took the bus at ten. We saw an old ship. Then we drew pictures of it. I liked the visit because I love history. Next Saturday, I am going to visit the library.</p>
      <form id="english-semester-grade"><fieldset><legend>Autoévaluation de la rédaction sur 4</legend>
      <p>Coche les critères que ta rédaction remplit. Chaque critère vaut 1 point.</p>
      ${criteria.map((criterion,index) => `<p><label><input type="checkbox" name="criterion" value="${index}"> ${criterion}</label></p>`).join('')}
      </fieldset>
      <p><button class="button" type="submit">${canSave?'Enregistrer ma note sur 20':'Calculer ma note sur 20'}</button></p></form>
      <p id="english-exam-score" role="status"></p>
      <p><a href="#weekly">Retour à la semaine d’anglais</a></p></article>`;
    result.focus();
    const rubric = result.querySelector('form');
    rubric.addEventListener('submit', event => {
      event.preventDefault();
      const writtenPoints = new FormData(rubric).getAll('criterion').length;
      if (canSave) {
        saveExam([...answers,{questionId:writingId, correct:false, selfAssessed:true, response:writtenPoints+'\\n'+writing}]);
        for (const control of rubric.elements) control.disabled = true;
      }
      result.querySelector('#english-exam-score').textContent =
        `Note ${points+writtenPoints}/20 · rédaction autoévaluée ${writtenPoints}/4${canSave?' · résultat enregistré':''}.`;
    });
  });
}
