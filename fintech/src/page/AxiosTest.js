import React, { useState } from 'react'
import AppBar from '../components/common/AppBar'
import axios from 'axios'

const AxiosTest = () => {
    const [data, setData] = useState()
    const handleClick = () => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-04-18&sortBy=publishedAt&apiKey=9e8bb3773cd149b7bcfd717a9f1b85f9').then((response) => {
            console.log(response.data);
            setData(response.data)
        });
        console.log("hello");
      }  
    return (
    <>
        <AppBar title={"통신테스트"}/>
        <button onClick={handleClick}>데이터 Request(요청)</button>
    </>
  )
}

export default AxiosTest