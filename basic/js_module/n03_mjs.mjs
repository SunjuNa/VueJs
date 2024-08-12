//default
// import { fnA } from './modules/cjs/cjs03';
import a1 from './modules/esm/esm01.mjs';
console.log(a1);

import fnA1 from './modules/esm/esm02.mjs'; //이름은 아무거나 붙일 수 있음
fnA1();

import objA from './modules/esm/esm03.mjs';
console.log(objA.a);
objA.fnA();

console.log('====================');

//named module
import * as mA from './modules/esm/esm04.mjs';
console.log(mA.a);
mA.fnA();

import { a, fnA } from './modules/esm/esm04.mjs'; //분해 할당 가능
console.log(a);
fnA();

import { a as a2, fnA as fnA2 } from './modules/esm/esm04.mjs';
console.log(a2);
fnA2();

console.log('=================');

import { m_a, m_fnA, m_a2 } from './modules/esm/esm05.mjs';
console.log(m_a);
m_fnA();
