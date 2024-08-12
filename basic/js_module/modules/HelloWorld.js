//기본적으로 모듈 스코프
//exports를 이용하여 외부에 전달
exports.sayHello = function fn(name = '회원') {
    console.log(`${name}님 안녕하세요.`); //백틱 주의
};
