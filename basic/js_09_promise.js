//마우스오른쪽 - run code
//settimeout사용
//비동기식
setTimeout(() => {
    console.log('01.');
}, 1000);
console.log('02.');
setTimeout(() => {
    console.log('03.');
}, 500);
console.log('04.');

//callback
function fn(callback, t) {
    setTimeout(callback, t);
}

fn(function () {
    //콜백함수를 통한 실행순서 정함
    console.log('05.');
    fn(function () {
        console.log('06.');
    }, 500);
}, 1000);

console.log('================='); //비동기라서 빨리 처리됨
//콜백지옥...을 줄이기위해 promise를 사용해보자

//promise 사용 처리
//아래는 promise객체 pro
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('가.');
        resolve();
        //reject();
    }, 1000);
});

pro.then(() => {
    console.log('나.');
})
    .then(() => {
        console.log('다');
    })
    .catch((err) => {
        //catch, finally는 옵션사항이므로 굳이 쓰지 않아도 된다.
        console.log(err);
    })
    .finally(() => {
        console.log('라');
    });

//then이 많아질 수 있을 때 -> async, await을 씀(얘네도 많이 씀)
//async를 쓰면 promise객체가 만들어짐 -> return안써도 promise객체를 줌

function pro1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('사.');
            resolve();
            //reject(); //await은 reject처리하지 못함
        }, 500);
    });
}
//async는 함수의 앞에 붙여서 해당 함수가 비동기 함수임을 나타낸다
async function fn1() {
    //await : promise객체밖에 못씀
    //: 해당 비동기 작업이 완료될 때까지 코드 실행을 일시 중지하고 결과를 기다린 다음,
    // 해당 결과를 반환한다
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('마.');
            resolve();
            //reject(); //await은 reject처리하지 못함
            //에러를 처리하려면 try and catch구문을
            //사용해야한다
        }, 1000);
    });
    console.log('바.');

    await pro1(); //await는 async함수 안에서만 사용할 수 있다.
}

fn1()
    .catch((err) => console.log(err))
    .finally(() => {
        console.log('완료됨');
    });
