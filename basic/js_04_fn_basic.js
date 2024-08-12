//기본함수
console.log(add1(1, 2));

function add1(a, b) {
    return a + b;
}

// console.log(add1(10)); //NaN // a는 초기화되고,b는 초기화되지 않아서 undefined가 돼서, 결과적으로 a+b=NaN

//기본값 매개변수
function add2(a, b = 0) {
    return a + b;
}
console.log(add2(1, 2));
console.log(add2(10));

//Arguments 객체
function add3() {
    let c = 0;
    for (let i = 0, cnt = arguments.length; i < cnt; i++) {
        c += Number(arguments[i]);
    }
    return c;
}
console.log(add3(1, 2));
console.log(add3(10));
console.log(add3(10, 20, 30, 40, 50));
console.log('--------------------------------------');

//나머지 매개변수(Rest Operator)
//나머지 매개변수는 생략 접두사(...)를 사용하여 특정 위치의 인수부터 마지막 인수까지를 한 번에 지정할 수 있습니다.
function add4(...a) {
    //a:배열 -> 로 반환
    let c = 0;
    for (let i = 0, cnt = a.length; i < cnt; i++) {
        c += Number(a[i]);
    }

    c = 0;
    for (let i in a) {
        //index, key(property) 추출
        c += Number(a[i]);
    }

    c = 0;
    for (let v of a) {
        //value추출
        c += Number(v);
    }

    c = 0;
    a.forEach((v) => (c += Number(v)));
    return c;
}
console.log(add4(1, 2));
console.log(add4(10));
console.log(add4(10, 20, 30, 40, 50));
console.log('--------------------------------------');

//함수의 합성(다형성 구현)
function add5(a, b, ...f) {
    //첫 번째,두번째 인수를 변수 a,b에 저장하고 나머지 인수들은 배열 ...f에 저장함.
    let c = 0;
    f.forEach((fn) => (c += fn(a, b)));
    return c;
}
console.log(
    add5(
        10,
        20,
        (a, b) => a + b,
        (a, b) => a - b,
    ), //30 +(-10) = 20
);

//전개구문(Spread Operator) : 배열을 분해하는 연산자
let arr = [1, 2, 3, 4, 5];
console.log(...arr);

let str = 'hello';
console.log(str);
console.log(...str);

let arr1 = [arr, 6, 7, 8];
console.log(arr1); //[[1,2,3,4,5],6,7,8]

let arr2 = [...arr, 6, 7, 8]; //객체의 깊은 복제
console.log(arr2); //1,2,3,4,5,6,7,8

let obj = { name: '홍길동', addr: '서울시' };
let obj1 = { ...obj, age: 20 };
console.log(obj1);

//즉시 호출(실행) 함수 - side effect를 피하기 위해 함수를 바로 실행할때 사용, 요즘은 잘 안 사용...
(function add6(a, b) {
    console.log(a + b);
})(1, 2);
