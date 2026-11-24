import test from 'node:test';
import assert from 'node:assert/strict';
import {newViews} from '../views-v2.js';
import {builtInCourses} from '../catalog.js';
const context={esc:String,button:()=>'<button>Action</button>',state:{attempts:[],customCourses:[]},courses:builtInCourses,course:builtInCourses[0],currentUser:null,member:null,configured:false};
test('Toutes les vues s’affichent en mode local, sans appel de currentUser comme fonction',()=>{const v=newViews(context);for(const name of ['weekly','parent','library','editor'])assert.ok(v[name]().includes('<h1>'));assert.ok(v.parent().includes('cet appareil uniquement'));});
test('Le parent voit la date de synchronisation, l’élève ne peut éditer les dossiers',()=>{const v=newViews({...context,currentUser:'test-user',member:{role:'learner'},state:{...context.state,lastSync:'2026-11-24T18:00:00Z'}});assert.ok(v.parent().includes('Dernière synchronisation réussie'));assert.ok(!v.editor().includes('id="course-form"'));});
