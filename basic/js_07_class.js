//일반적인 기능을 먼저 구현
class Polygon {
    /* 
    //기본적으로 public으로 지정 되기 때문에 private을 붙이고 싶다면 #을 붙인다
    #privateField = 10;
    #privateMethod() {}
    //static은 아래와 같다
    static #privateField = 10;
    static #privateMethod(){}
    */
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //set area(param){this.aaa=param; }

    get area() {
        //java에서 getter를 의미함
        return this.height * this.width;
    }

    print() {
        console.log(`면적 : ` + this.area); //area가 프로퍼티인거 주의
    }
}

let poly = new Polygon(10, 20);
console.log(poly.area);
poly.print();

class Square extends Polygon {
    constructor(length) {
        super(length, length);
    }
}

//특수한 경우 20~30% 지정(사각형 -> 정사각형)
let squ = new Square(10);
console.log(squ.area);
squ.print();
