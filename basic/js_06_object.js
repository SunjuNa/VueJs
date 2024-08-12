//객체를 만드는 방법
//1.리터럴
const calc = {
    a: 1,
    b: 2,
    add: function () {
        return this.a + this.b;
    },
    //아래는 es6부터 제공, 단축속성명이라고 한다, 프로퍼티명과 값의 변수명이 같은 경우 사용
    add2() {
        //위의 케이스와 같다 다만 쓰는게 달라진것 뿐이다.
        return this.add();
    },
    add3: () => {
        // return this.add(); //화살표 함수내에서는 this키워드가 의미가 없다.
        return this.a + this.b; //undefined
    },
};

console.log(calc.add(), calc.add2(), clac.add3());

const calc2 = {};
calc2.a = 1;
calc2.b = 2;
calc2.add = function () {
    return this.a + this.b;
};
console.log(calc2.add());
console.display = function () {
    console.log('테스트입니다.');
};
console.display();

//2.생성자 함수 - new, 프로토타입과 관련있음 - 이런게 있다로 보고 넘어가면 됨(보통 리터럴로 구현함)
function calc3(a, b) {
    this.a = a;
    this.b = b;
}

calc3.prototype.add = function () {
    return this.a + this.b;
};

let obj3 = new calc3(1, 2);
console.log(obj3.add());

//3.
