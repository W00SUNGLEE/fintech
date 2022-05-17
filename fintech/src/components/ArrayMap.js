import React, { useState } from 'react'
import Welcome from './Welcome';
const ArrayMap = () => {
    //데이터 선언
    const [users, setUsers] = useState([
        { name: "홍길동", age: 12, height: 180 },
        { name: "동", age: 18, height: 180 },
        { name: "길동", age: 16, height: 180 },
      ]);
    
  
    return (
    <div>
        {
            users.map(({name, age}) => {
                // return (<p>{user.age}세 {user.name} 님 안녕하세요</p>)
                return <Welcome username={name} age={age}></Welcome>
            })
        }
    </div>
  )
}

export default ArrayMap