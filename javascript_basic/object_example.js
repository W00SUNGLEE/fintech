let car = { //객체 object는 { key : value } 형식으로 사용
    name : "sonata",
    ph : 500,
    start : () => {  //func 도 object 안에서는 = 대신 : 사용
        console.log('engine start')
    },
    stop : () => { 
        console.log('engine stop')
    }
}

console.log(car)
console.log(car.name)
console.log(car.start)
car.start(); // 객체내 함수 실행