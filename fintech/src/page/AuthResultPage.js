import React, { useEffect, useState } from 'react'
import AppBar from '../components/common/AppBar'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

const AuthResultPage = () => {
  //console.log(useLocation().search)
  const { code } = queryString.parse(useLocation().search);
  const [accessToken, setAccessToken] = useState('토큰이 없습니다.')
  const [userSeqNo, setUserSeqNo] = useState('사용자 번호가 없습니다.')

  useEffect(() => {
    handleGetAccessToeknClick(); 
  },[]);

  console.log(process.env.REACT_APP_client_id)
  console.log(process.env.REACT_APP_client_secret)


  const handleGetAccessToeknClick = () => {
    const sendData = { //본인 id secret url로 바꾸기
        code: code, // id secret 같은 중요한 key 경우 .env
        client_id:process.env.REACT_APP_client_id,
        client_secret:process.env.REACT_APP_client_secret,
        redirect_uri:"http://localhost:3000/authResult",
        grant_type:"authorization_code"
    }
    
    //sendData를 string으로 바꾸기
    const encodedData = queryString.stringify(sendData);

    console.log(sendData)
    console.log(encodedData)

    const option = {
      method : "POST",
      url: "/oauth/2.0/token",
      header: {
          "Content-Type" : "application/x-www-form-urlencoded"
      },
      data: encodedData
    }

    axios(option).then(({data}) => {
        console.log(data)
        if(data.rsp_code === "O0001"){
          alert("인증코드가 만료되었습니다. 인증을 다시 진행해주세요.")
        }
        else{
          setAccessToken(data.access_token);
          setUserSeqNo(data.user_seq_no);
          localStorage.setItem('accessToken', data.access_token);
          localStorage.setItem('user_seq_no', data.user_seq_no);
        }
    })
    
  }

  return (
    <>
        <AppBar title={"인증결과"}></AppBar>
        <p>인증코드 : {code}</p>
        <button onClick={handleGetAccessToeknClick}> 인증 요청 </button>
        <p>accessToken : {accessToken}</p>
        <p>userSeqNo : {userSeqNo}</p>
    </>
  )
}

export default AuthResultPage