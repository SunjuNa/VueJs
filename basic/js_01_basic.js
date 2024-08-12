console.log('hello world'); //마우스 오른쪽 -> run code -> terminal에 helloworld가 찍힘
//  "code-runner.runInTerminal": true, setting.json에서의 이 설정때문에 찍힘
console.log(console);

// var console = '가나다라'; //예약어도 override가능
// console.log(console); //

let pi = 3.14;
let radius = 10;
console.log(`둘레: ${2 * pi * radius}`); //`

radius = 'abcd';
console.log(radius);

console.log(10 + 20); //리터럴

console.log('-------------------------');
console.log(typeof 10);
console.log(typeof 10.1);
console.log(typeof '12345');
console.log(typeof true);
console.log(typeof function () {}); //function
console.log(typeof {}); //object - 객체(new 필요없음)
console.log(typeof []); //object - 배열
console.log(typeof aaaaa); //undefined

console.log(1 + '2');
console.log('1' + 2);
console.log('1' / 2); //나누기는 숫자만 되는 연산자라 1을 숫자로 바꿈
console.log('1' * 1.0 * 2);

console.log('안녕하세요.'[0]); //안

//비교연산자
console.log('273' == 273); //true(값비교)
console.log('273' === 273); //false(값, 타입 비교)

//논리연산자
//단축평가(=소트 서킷)
true || console.log('실행1'); //실행안됨
false || console.log('실행2'); //실행됨

true && console.log('실행1'); //true이므로 실행1을 실행함
false && console.log('실행2');

//형변환
console.log(Number('1') + 2);
console.log(Number(true) + 2);
console.log(Number(false) + 2);
console.log(Number('1abcd2')); //NaN
console.log(isNaN(Number('1abcd2')));

let test = '123abcd';
//숫자가 아닙니다를 출력하세요
!isNaN(test) || console.log('숫자가 아닙니다');
isNaN(Number(test)) && console.log('숫자가 아닙니다');

//구조분해할당
//변수선언은 let을 추천한다.
//하지만 이번엔 똑같은 변수명을 쓰기 위해 var를 써봄
var [a, b, c] = [1, 2, 3]; //window객체의 프로퍼티 a,b,c
console.log(a, b, c);

var [a, b, c] = [1, 2];
console.log(a, b, c); //1,2,undefined

//초기화 후 값 할당
var [a = 0, b = 0, c = 0] = [1, 2];
console.log(a, b, c);

// var obj = {
//     pro1: 1,
//     pro2: 'str',
//     pro3: true,
//     pro4: function () {
//         console.log('구조분해할당');
//     },
// };
//위를 구조분해할당으로 만듬
var { pro1, pro2, pro3, pro4 } = {
    pro1: 1,
    pro2: 'str',
    pro3: true,
    pro4: function () {
        console.log('구조분해할당');
    },
};
console.log(pro1, pro2, pro3);
pro4();

let stud = [1, 2, 3];
let [국어, 영어, 수학] = stud;
console.log(국어, 영어, 수학);

//let의 경우 변수선언을 다음에 쓰면 선언이 안됨
//var는 변수선언 중복이 가능함

const f = 123; //const: 상수선언 - 참조형(cf) javascript는 heap밖에 읎대...
// f = 1234; //변환이 안됨, 상수라
const g = { p1: 1, p2: 2 };
g.p1 = 3;
console.log(g); //주소값이 바뀌면 오류이지만 주소값이 안바뀌면 오류가 아니어서 바뀜
