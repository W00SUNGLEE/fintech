//rafce : react func export

import React, { useState } from 'react'

export const StateAndEvent = () => {

    //let userText = "사용자 입력 내용"
    const [userText, setUserText] = useState("초기 값 입니다.")
            //이름,  변경할함수
    const handleClick = () => {
        alert("test");
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setUserText(value);
    }

  return (
    <>
        <p>{userText}</p>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>데이터 변경</button>
    </>
  )
}

export default StateAndEvent
