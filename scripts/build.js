import {mkdir,copyFile,rm} from 'node:fs/promises';
const files=['maths.js','geometry.js','geography.js','exam-plan.js','figures.js','index.html','app.js','core.js','data.js','english.js','catalog.js','planning.js','views-v2.js','sync.js','config.js','styles.css','sw.js','manifest.webmanifest','icon.svg'];
await rm('dist',{recursive:true,force:true}); await mkdir('dist');
for(const file of files) await copyFile(file,`dist/${file}`);
console.log('Application statique prête dans dist/');
