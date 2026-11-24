import {questions,memos} from './data.js?v=2.1';
import {english} from './english.js?v=2.1';
export const builtInCourses=[{id:'scapin',title:'Les Fourberies de Scapin',subject:'Français',description:'Comprendre le théâtre, les personnages et les procédés comiques.',questions,memos},english];
export function validateCourse(raw){
 const text=(v,max)=>typeof v==='string'&&v.trim().length>0&&v.length<=max;
 if(!raw||!text(raw.id,60)||!/^custom-[a-z0-9-]+$/.test(raw.id)||!text(raw.title,120)||!text(raw.subject,40)||!Array.isArray(raw.questions)||raw.questions.length<1||raw.questions.length>300||!Array.isArray(raw.memos)||raw.memos.length>50)throw Error('Fichier de révision invalide : titre, matière, questions et fiches sont nécessaires.');
 const ids=new Set(); const clean={id:raw.id,title:raw.title,subject:raw.subject,description:typeof raw.description==='string'?raw.description.slice(0,1000):'',questions:[],memos:[]};
 for(const q of raw.questions){if(!text(q.id,100)||!q.id.startsWith(raw.id+'-')||ids.has(q.id)||!text(q.prompt,3000)||!text(q.topic,100)||!text(q.memo,5000)||!['mcq','open'].includes(q.type))throw Error('Une question est invalide ou dupliquée.');ids.add(q.id);const n={id:q.id,prompt:q.prompt,topic:q.topic,memo:q.memo,type:q.type};if(q.type==='mcq'){if(!Array.isArray(q.choices)||q.choices.length<2||q.choices.length>4||q.choices.some(c=>!text(c,1000))||new Set(q.choices).size!==q.choices.length||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length)throw Error('Choix ou correction du QCM invalides.');Object.assign(n,{choices:q.choices,answer:q.answer});}else{if(!Array.isArray(q.criteria)||q.criteria.length<1||q.criteria.length>6||q.criteria.some(c=>!text(c,500)))throw Error('Critères de rédaction invalides.');n.criteria=[...q.criteria];}clean.questions.push(n);}
 for(const m of raw.memos){if(!text(m.title,120)||!text(m.body,10000))throw Error('Une fiche mémo est invalide.');clean.memos.push({title:m.title,body:m.body});}return clean;
}
