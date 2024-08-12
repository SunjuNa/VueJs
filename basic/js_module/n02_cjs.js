//default module : 이름을 지정하지 않은 모듈
const a1 = require('./modules/cjs/cjs01');
console.log(a1);

const fnA2 = require('./modules/cjs/cjs02');
fnA2();

//default는 기본적으로 이름을 지정하지 않았기 때문에 하나의 값(function, value)만 보낼 수 있다.

const objA3 = require('./modules/cjs/cjs03');
console.log(objA3.a);
objA3.fnA();
console.log('=======================');

// named module : 이름을 지정한 모듈
//객체로 받아서 출력
const mA = require('./modules/cjs/cjs04');
console.log(mA.a);
mA.fnA();

//분해 방법(출력에서의 방법)
const { a, fnA } = require('./modules/cjs/cjs04');
console.log(a);
fnA();
console.log('=======================');

//실전에서 가장 많이 보이는 형식
const { m_a, m_fnA } = require('./modules/cjs/cjs05'); //필요한것만 받아와도 된다.
const { m_a2 } = require('./modules/cjs/cjs05');
console.log(m_a);
m_fnA();
console.log(m_a2);
console.log('=======================');

if (a1 > 0) {
    //a1은 맨처음에 있음
    const a2 = require('./modules/cjs/cjs01'); //한번 불러온 module은 캐시에 저장돼서, 있는 걸 실행함, 따라서 몇번이고 불러와도 상관없음
    console.log(a2);
}
