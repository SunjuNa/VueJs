//클로저(Closure) D.P.(design pattern)
//함수 선언식
function cnt1() {
    let count = 0;
    return ++count;
}

console.log(cnt1()); //1
console.log(cnt1()); //1

//cnt1 vs cnt2

let count = 0;
function cnt2() {
    return ++count;
}

console.log(cnt2()); //1
console.log(cnt2()); //2

//cf) 위 구문은 side effect가 일어날 수 있다 => closure로 처리
// let count = 0;
// function cnt2() {
//     return ++count;
// }
// count = 100;

// console.log(cnt2()); //101
// console.log(cnt2()); //102
console.log('=============================');

//클로저(Closure) D.P.(design pattern) <-> java에서 private static과 비슷
//함수를 반환하는 함수
function cnt3() {
    let count = 0;
    return function () {
        //결과적으로 cnt3는 ""함수""를 리턴
        return ++count;
    };
}

// 함수표현식
let cl = cnt3(); //cl : 함수
console.log(cl()); //1
console.log(cl()); //2

let cl2 = cnt3();
console.log(cl2()); //1
console.log(cl2()); //2 //3,4가 아님을 알 수 있음
