//이 방법이 젤 많이 쓰임
const m_a = 'm_A';

function m_fnA() {
    console.log('m_fnA()입니다');
}

let a = { m_a, m_fnA, m_a2: m_a }; //m_a2: m_a의 기능을 쓰되 별칭은 m_a2인 것을 넘긴다
module.exports = a; //default방식으로 넘김
