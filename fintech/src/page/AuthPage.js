import React from 'react'
import AppBar from '../components/common/AppBar'
import styled from 'styled-components'

const AuthButton = styled.button`
    border: 1px dotted #000;
    background-color: #282c34;
    color: white;
    text-align: center;
`

const AuthPage = () => {

    const handleAuthButtonClick = () => {
        //새창으로 인증사이트 오픈
        const authPageUrl = "https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=b27b0251-26c4-4051-9559-fed2970864fe&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0"
        let tmpwindow = window.open(authPageUrl)
        tmpwindow.location.href = authPageUrl
    }
  
    return (
    <>
        <AppBar title={"사용자 인증"}></AppBar>
        <AuthButton onClick={handleAuthButtonClick}>사용자 인증</AuthButton>
    </>
  )
}

export default AuthPage