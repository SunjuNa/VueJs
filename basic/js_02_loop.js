let ary = [100, 200, 300, 400, 500];
// for (let i = 0, cnt = ary.length; i < cnt; i++) {
//     console.log(ary[i]);
// }

ary = 'ddddddd';
for (let i = 0, cnt = ary.length; i < cnt; i++) {
    //side effect: 외부의 영향을 받아서 결론이 바뀜
    console.log(ary[i]);
}

//side effect를 피하는 방법 2가지, 함수, forEach
function fn() {
    //side effect를 피하기 위해 함수안에 넣어 지역변수로 만듬
    let ary2 = [100, 200, 300, 400, 500];
    //....
}

function output(item) {
    //다만 함수는 코드의 재활용을 위해 사용하는 목적이 크므로... 후자를 추천
    //재사용 가능한 이름있는 함수
    console.log(item);
}

ary.forEach(output);

ary.forEach(function (item) {
    //무명함수(anonymous function): 재사용하지 않는 무명함수, 코드를 넘기기 위해 사용
    console.log(item);
});

//화살표 함수(=>) : 무명함수 만들때 사용
ary.forEach((item) => console.log(item));

//부작용이 없는 안전한 코드. 선언형 프로그래밍(what, 함수지향형), 명령형 프로그래밍(how, 객체지향형)
[100, 200, 300, 400, 500].forEach((item) => console.log(item));
[100, 200, 300, 400, 500].forEach((item) => {
    console.log(item);
});

//ary의 값을 2배하여 출력하시오
ary.map((x) => x * 2).forEach((item) => console.log(item)); //불변형 프로그래밍, 2를곱해도 원래값이 변하진 않음
ary.forEach((item) => console.log(item));

let ary1 = [1, 2, 3, 4, 5];
//ary1의 값을 모두 출력하시오
ary.forEach((item) => console.log(item));
//ary1의 값을 2배해서 출력하시오
ary.map((x) => x * 2).forEach((item) => console.log(item));

//짝수만 출력하세요
ary1.filter((x) => x % 2 == 0).forEach((item) => console.log(item));

//ary1의 총합을 구하세요
let total = ary1.reduce((tot, x) => (tot += x)); //reduce: 누적합
console.log(total);

//짝수들의 합을 구하세요
total = ary1.filter((x) => x % 2 == 0).reduce((tot, x) => (tot += x));
console.log(tot);

//some : 하나라도 있으면 true를 반환
let result = ary1.some((x) => x < 3);
console.log(result);

//모두 그 조건을 만족할때 true를 반환
result = ary1.every((x) => x < 3);
console.log(result);
