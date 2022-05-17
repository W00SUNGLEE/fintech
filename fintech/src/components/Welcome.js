const Welcome = ({username, age}) =>{
    console.log({username, age})
    return (<h2>안녕하세요 {username}님 나이는 {age}살 입니다</h2>);
  }

  //외부에서 볼수 있도록 export
  export default Welcome;