import {mergeAttempts} from './core.js?v=2.1';
export function weekKey(now=new Date()){const d=new Date(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate()));d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return d.toISOString().slice(0,10);}
export function weekNumber(now=new Date()){return Math.floor((Date.parse(weekKey(now))-Date.UTC(2026,10,23))/(7*86400000));}
export function weeklyPlan(course,now=new Date()){
 const topics=[...new Set(course.questions.filter(q=>q.type==='mcq').map(q=>q.topic))];if(!topics.length)return [];
 const index=((weekNumber(now)%topics.length)+topics.length)%topics.length,topic=topics[index],q=course.questions.filter(q=>q.type==='mcq'&&q.topic===topic),open=course.questions.find(q=>q.type==='open'&&q.topic===topic);
 const rotate=(a,n)=>a.slice(n%a.length).concat(a.slice(0,n%a.length));
 const start=(weekNumber(now)*3%q.length+q.length)%q.length,ordered=rotate(q,start);
 const all=course.questions.filter(q=>q.type==='mcq'),mix=rotate(all,(index*8)%all.length);
 return [{id:'learn',label:'Séance 1 · Je découvre',detail:'Mémo puis 4 questions',mode:'daily',topic,ids:ordered.slice(0,4).map(q=>q.id)}, {id:'practice',label:'Séance 2 · Je m’entraîne',detail:'4 questions et une courte production',mode:'daily',topic,ids:[...ordered.slice(-4).map(q=>q.id),...(open?[open.id]:[])]},{id:'review',label:'Séance 3 · Je consolide',detail:'6 questions à retrouver de mémoire',mode:'daily',topic,ids:rotate(mix,4).slice(0,6).map(q=>q.id)},{id:'check',label:'Week-end · Petit examen blanc',detail:'8 questions, corrigé à la fin',mode:'exam',topic,ids:mix.slice(0,8).map(q=>q.id)}].map(s=>({...s,week:weekKey(now),courseId:course.id,memo:course.memos.find(m=>m.topic===topic)||course.memos[0]}));
}
export function completedRuns(attempts){const groups=new Map();for(const a of mergeAttempts([],attempts)){const m=a.meta;if(!m?.runId||!m.runSize)continue;const r=groups.get(m.runId)||{...m,ids:new Set(),at:a.at};r.ids.add(a.questionId);r.at=a.at;groups.set(m.runId,r);}return [...groups.values()].filter(r=>r.ids.size>=r.runSize);}
export function parentReport(courses,attempts,now=new Date()){
 const cutoff=now.getTime()-7*86400000,valid=mergeAttempts([],attempts).filter(a=>Date.parse(a.at)<=now.getTime()),recent=valid.filter(a=>Date.parse(a.at)>=cutoff),runs=completedRuns(valid).filter(r=>Date.parse(r.at)>=cutoff);
 const reports=courses.map(c=>{const qs=c.questions.filter(q=>q.type==='mcq'),ids=new Set(qs.map(q=>q.id)),latest=new Map();for(const a of valid)if(ids.has(a.questionId)&&!a.selfAssessed)latest.set(a.questionId,a);
 const first=new Map();for(const a of recent){if(!ids.has(a.questionId)||a.selfAssessed||a.meta?.retry)continue;if(!first.has(a.questionId))first.set(a.questionId,a);}
 const tested=first.size,correct=[...first.values()].filter(a=>a.correct).length,rate=tested?Math.round(correct*100/tested):null,coverage=qs.length?Math.round(tested*100/qs.length):0;
 const status=!tested?'Pas encore évalué':coverage<60?'Encore peu évalué':rate>=80?'Acquis à confirmer':rate>=60?'À consolider':'À reprendre ensemble';
 const weaknesses=qs.map(q=>{const aa=recent.filter(a=>a.questionId===q.id&&!a.selfAssessed),last=latest.get(q.id);return {question:q,errors:aa.filter(a=>!a.correct).length,lastWrong:last?.correct===false};}).filter(w=>w.lastWrong||w.errors>=2).sort((a,b)=>Number(b.lastWrong)-Number(a.lastWrong)||b.errors-a.errors);
 return {course:c,tested,correct,rate,coverage,status,weaknesses,unseen:qs.filter(q=>!latest.has(q.id)).length};});
 return {lastActivity:valid.at(-1)?.at||null,answers:recent.length,days:new Set(recent.map(a=>new Date(a.at).toLocaleDateString('fr-FR'))).size,runs:runs.length,reports,priorities:reports.flatMap(r=>r.weaknesses.map(w=>({...w,course:r.course}))).sort((a,b)=>Number(b.lastWrong)-Number(a.lastWrong)||b.errors-a.errors).slice(0,3)};
}
