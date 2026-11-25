import {weekKey, weekNumber} from './planning.js?v=2.2';

const weeks = [
  {
    title: 'Me presento', theme: 'Portrait et autoportrait',
    words: [['el nombre', 'le prénom'], ['el apellido', 'le nom de famille'], ['los años', 'les années'], ['vivir', 'habiter'], ['la ciudad', 'la ville'], ['la amiga', 'l’amie']],
    rule: 'Pour te présenter, utilise me llamo + prénom, soy de + lieu d’origine et tengo + nombre + años pour l’âge.',
    example: 'Me llamo Inés. Soy de Sevilla y tengo doce años.',
    drill: ["Yo … de Sevilla. (ser)","soy"],
    grammar: 'En parlant de toi, complète « … doce años ».', forms: ['Tengo', 'Tiene', 'Soy'],
    text: 'Hola, me llamo Alma. Soy de Granada, pero vivo en Sevilla. Tengo once años. Mi amiga Sara tiene doce años.',
    reading: 'Où Alma habite-t-elle ?', answers: ['À Séville', 'À Grenade', 'À Madrid'],
    writing: 'Présente-toi en trois phrases. Donne ton prénom, ton âge et ta ville.',
    model: 'Me llamo Louise. Tengo doce años. Vivo en Lyon.'
  },
  {
    title: 'Un día en casa', theme: 'Le quotidien et ses rythmes',
    words: [['la mañana', 'le matin'], ['la tarde', 'l’après-midi'], ['el desayuno', 'le petit-déjeuner'], ['desayunar', 'prendre le petit-déjeuner'], ['la merienda', 'le goûter'], ['la cena', 'le dîner']],
    rule: 'Au présent, desayunar se termine par -o avec yo, -as avec tú, -a avec él ou ella. Pour dire à quelle heure, utilise a las devant une heure au pluriel.',
    example: 'Desayuno a las ocho. Clara desayuna a las siete.',
    drill: ["Yo … a las ocho. (desayunar)","desayuno"],
    grammar: 'Complète « Clara … a las siete ».', forms: ['desayuna', 'desayuno', 'desayunas'],
    text: 'Mateo vive en Valencia. Desayuna a las siete y media. A las cinco de la tarde merienda con su hermano. Cena a las nueve.',
    reading: 'À quelle heure Mateo goûte-t-il ?', answers: ['À 17 h', 'À 7 h 30', 'À 21 h'],
    writing: 'Indique à quelle heure tu prends ton petit-déjeuner et ton goûter. Fais deux phrases.',
    model: 'Desayuno a las ocho. Meriendo a las cinco.'
  },
  {
    title: 'El instituto y los gustos', theme: 'École et loisirs',
    words: [['el recreo', 'la récréation'], ['el horario', 'l’emploi du temps'], ['la asignatura', 'la matière scolaire'], ['el dibujo', 'le dessin'], ['la música', 'la musique'], ['las ciencias', 'les sciences']],
    rule: 'Pour parler de tes goûts, écris me gusta avec un infinitif ou un nom singulier, et me gustan avec un nom pluriel.',
    example: 'Me gusta dibujar. Me gustan las ciencias.',
    drill: ["Me … dibujar. (gustar)","gusta"],
    grammar: 'Complète « Me … las ciencias ».', forms: ['gustan', 'gusta', 'gusto'],
    text: 'Soy Julia y vivo en Bogotá. Mi asignatura favorita es la música. En el recreo hablo con mis amigos. Después de clase me gusta dibujar.',
    reading: 'Que fait Julia pendant la récréation ?', answers: ['Elle parle avec ses amis', 'Elle dessine', 'Elle joue de la musique'],
    writing: 'Écris une phrase sur une activité que tu aimes et une autre sur des matières que tu aimes.',
    model: 'Me gusta nadar. Me gustan las ciencias y las matemáticas.'
  },
  {
    title: 'Una historia fantástica', theme: 'Le réel et l’imaginaire',
    words: [['el cuento', 'le conte'], ['el bosque', 'la forêt'], ['el castillo', 'le château'], ['el dragón', 'le dragon'], ['la bruja', 'la sorcière'], ['la llave', 'la clé']],
    rule: 'En espagnol, un adjectif comme pequeño s’accorde avec le nom. On écrit un dragón pequeño, una bruja pequeña ou dos llaves pequeñas.',
    example: 'En el castillo vive una bruja simpática.',
    drill: ["Dos llaves … . (pequeño)","pequeñas"],
    grammar: 'Complète « una bruja … ».', forms: ['simpática', 'simpático', 'simpáticos'],
    text: 'En un cuento de la biblioteca de Madrid, un dragón pequeño vive en un castillo. La bruja tiene una llave dorada y abre la puerta del castillo.',
    reading: 'Qui possède la clé ?', answers: ['La sorcière', 'Le dragon', 'Le bibliothécaire'],
    writing: 'Imagine un personnage de conte. Dis où il habite et décris-le avec un adjectif.',
    model: 'La bruja vive en un bosque. Es pequeña y simpática.'
  },
  {
    title: 'Un paseo por Galicia', theme: 'Langues, lieux et histoires',
    words: [['el pueblo', 'le village'], ['la plaza', 'la place'], ['la lengua', 'la langue'], ['el gallego', 'le galicien'], ['el mapa', 'la carte'], ['el camino', 'le chemin']],
    rule: 'Hay indique qu’une chose existe. Está ou están situent une chose ou des choses déjà identifiées.',
    example: 'En el pueblo hay una plaza. La plaza está cerca del río.',
    drill: ["En el pueblo … una biblioteca. (hay / está)","hay"],
    grammar: 'Complète « La plaza … cerca del río ».', forms: ['está', 'hay', 'están'],
    text: 'En Galicia se habla gallego y castellano. Ana vive en un pueblo. En el pueblo hay una biblioteca. La biblioteca está al lado de la plaza.',
    reading: 'Où se trouve la bibliothèque ?', answers: ['À côté de la place', 'Près de la rivière', 'À côté de la gare'],
    writing: 'Décris ton quartier en deux phrases. Utilise hay dans la première et está dans la seconde.',
    model: 'En mi barrio hay un parque. El parque está cerca de mi casa.'
  },
  {
    title: 'Un fin de semana en México', theme: 'Découvrir le Mexique',
    words: [['el museo', 'le musée'], ['el mercado', 'le marché'], ['la casa', 'la maison'], ['el cuadro', 'le tableau'], ['la pintora', 'la peintre'], ['el barrio', 'le quartier']],
    rule: 'Pour annoncer un projet proche, utilise ir au présent + a + infinitif. Pour « je vais », écris voy a. Pour « nous allons », écris vamos a.',
    example: 'Vamos a visitar la Casa Azul, en Coyoacán.',
    drill: ["Yo … a visitar el mercado. (ir)","voy"],
    grammar: 'Complète « Nosotros vamos … visitar el museo ».', forms: ['a', 'de', 'en'],
    text: 'El sábado voy a ir a Coyoacán, un barrio de Ciudad de México. Por la mañana voy a visitar la Casa Azul, el museo de Frida Kahlo. Por la tarde voy a ir al mercado.',
    reading: 'Que prévoit la personne le matin ?', answers: ['Visiter la Casa Azul', 'Aller au marché', 'Peindre un tableau'],
    writing: 'Imagine ton samedi au Mexique. Écris deux projets avec voy a et indique le moment de la journée.',
    model: 'Por la mañana voy a visitar un museo. Por la tarde voy a ir al mercado.'
  }
];

const source = 'https://www.education.gouv.fr/sites/default/files/annexe-9-programme-d-espagnol-pour-les-classes-de-coll-ge-440373.pdf';

function quizField(name, prompt, answers) {
  const offset = {reading: 1, vocab: 0, grammar: 2}[name];
  const ordered = [...answers.slice(offset), ...answers.slice(0, offset)];
  return `<label for="es-${name}">${prompt}</label>
    <select id="es-${name}" name="${name}" required>
      <option value="">Choisis une réponse</option>
      ${ordered.map(answer => `<option>${answer}</option>`).join('')}
    </select>`;
}

function lessonFor(now) {
  const current = weekNumber(now);
  return weeks[((current % weeks.length) + weeks.length) % weeks.length];
}

export function spanishWeek(now = new Date()) {
  const week = lessonFor(now);
  const monday = new Intl.DateTimeFormat('fr-FR', {dateStyle:'long', timeZone:'UTC'}).format(new Date(weekKey(now)));
  const [first, second, third, fourth] = week.words;
  return `<section aria-labelledby="es-title">
    <p>Espagnol · 5e LV2 · Objectif A1+</p>
    <h1 id="es-title">Ma semaine d’espagnol</h1>
    <div class="weekly-callout"><div><strong lang="es">${week.title}</strong>
      <span>${week.theme} · Semaine du ${monday}</span></div></div>
    <article class="card">
      <h2>Fiche de vocabulaire</h2>
      <ul>${week.words.map(([es, fr]) => `<li><strong lang="es">${es}</strong> · ${fr}</li>`).join('')}</ul>
      <p>Cache la liste et traduis « ${first[1]} » et « ${second[1]} ».</p>
      <details><summary>Voir la correction</summary><p lang="es">${first[0]} · ${second[0]}</p></details>
    </article>
    <article class="card">
      <h2>Fiche de grammaire</h2>
      <p>${week.rule}</p>
      <p lang="es"><strong>${week.example}</strong></p>
      <p>Lis l’exemple à voix haute, puis complète la phrase suivante.</p>
      <p lang="es">${week.drill[0]}</p>
      <details><summary>Voir la correction</summary><p lang="es">${week.drill[1]}</p></details>
    </article>
    <article class="card">
      <h2>Examen blanc de la semaine</h2>
      <p>Prends 15 minutes. Réponds d’abord sans consulter les fiches.</p>
      <p lang="es">${week.text}</p>
      <form id="spanish-exam">
        <p>${quizField('reading', week.reading, week.answers)}</p>
        <p>${quizField('vocab', `Comment dit-on « ${third[1]} » ?`, [third[0], fourth[0], second[0]])}</p>
        <p>${quizField('grammar', week.grammar, week.forms)}</p>
        <p><label for="es-writing">${week.writing}</label><br>
          <textarea id="es-writing" name="writing" rows="3" required></textarea></p>
        <button type="submit" class="button">Voir mon corrigé</button>
      </form>
      <div id="spanish-result" aria-live="polite"></div>
    </article>
    <p>Les six thèmes se succèdent chaque lundi, puis le cycle reprend.
      <a href="${source}">Programme officiel d’espagnol du collège</a></p>
  </section>`;
}

export function bindSpanishWeek(now = new Date()) {
  const week = lessonFor(now);
  document.querySelector('#spanish-exam').addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    if (!values.get('writing').trim()) {
      document.querySelector('#spanish-result').textContent = 'Écris ta réponse avant de consulter le corrigé.';
      return;
    }
    const keys = [
      ['reading', 'Compréhension', week.answers[0]],
      ['vocab', 'Vocabulaire', week.words[2][0]],
      ['grammar', 'Grammaire', week.forms[0]]
    ];
    const points = keys.filter(([name, , answer]) => values.get(name) === answer).length;
    document.querySelector('#spanish-result').innerHTML = `<h3>Corrigé</h3>
      <p><strong>${points}/3</strong> pour les questions à choix.</p>
      <ul>${keys.map(([name, label, answer]) => `<li>${label} · ${values.get(name) === answer ? 'Correct' : 'À revoir'} · ${answer}</li>`).join('')}</ul>
      <p>Exemple de réponse pour l’expression écrite</p><p lang="es">${week.model}</p>
      <p>Barème d’autoévaluation sur 3 points. Donne-toi un point si tu as suivi la consigne, un point si tu as utilisé le vocabulaire attendu et un point si tes verbes et accords sont corrects.</p>`;
  });
}
