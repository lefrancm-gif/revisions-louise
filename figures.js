// Original, code-drawn exercise figures; no student documents are published.
export function figure(name){
 if(name!=='coordinates')return '';
 const x=v=>270+v*40,y=v=>250-v*36;
 let grid='';for(let i=-5;i<=5;i++){grid+=`<path d="M${x(i)} 55V445 M65 ${y(i)}H475" stroke="#dce6e8" fill="none"/>`;if(i)grid+=`<text x="${x(i)}" y="270" text-anchor="middle">${i}</text><text x="255" y="${y(i)+5}" text-anchor="end">${i}</text>`;}
 return `<figure class="exercise-figure"><svg viewBox="0 0 550 505" role="img" aria-label="Repère orthogonal gradué de moins cinq à cinq, avec quatre points A, B, C et D à lire"><rect width="550" height="505" fill="#fff"/>${grid}<path d="M60 250H495l-9 -5m9 5l-9 5 M270 450V35l-5 9m5 -9l5 9" stroke="#264c55" stroke-width="2" fill="none"/><g fill="#264c55" font-size="16"><text x="280" y="270">O</text><text x="495" y="244">x</text><text x="283" y="39">y</text><text x="275" y="488" text-anchor="middle">Une graduation vaut 1 sur chaque axe.</text></g>${[['A',-3,2],['B',4,-1],['C',0,-3],['D',2,0]].map(([n,a,b])=>`<circle cx="${x(a)}" cy="${y(b)}" r="5" fill="#b64025"/><text x="${x(a)+9}" y="${y(b)-9}" fill="#932d17" font-size="20" font-weight="700">${n}</text>`).join('')}</svg><figcaption>Lis d’abord l’abscisse x, puis l’ordonnée y. Les graduations sont numérotées sur les deux axes.</figcaption></figure>`;
}
