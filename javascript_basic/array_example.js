let array = ['a', 'b', 'c', 123]; //배열 안에 들어가는 type은 상관없다

console.log(array)

array.push('d');

console.log(array)

//in java
//private String [] StringArray = new String[6];
//private ArrayList<String> arrayListString = new ArrayList<String>

//가장 기본적인 반복문의 표현법
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//for ... of의 사용법
for(element of array){
    console.log(element);
}

//array.map(function ()=>{})
array.map((element)=> {
    console.log(element)
})