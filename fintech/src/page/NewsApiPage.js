import React, { useState } from 'react'
import AppBar from '../components/common/AppBar'
import SearchInput from '../components/news/SearchInput'
import SearchResult from '../components/news/SearchResult'
import axios from 'axios'

const NewsApiPage = () => {
  const [Input, setInput] = useState('')

  const [Result, setResult] = useState([])

  const inputHandleChange = (event) => {
    const {value} = event.target;
    setInput(value);
    console.log(Input)
  }

  const ButtonHandleClick = () => {
    console.log("Click", Input)
    const url = `https://newsapi.org/v2/everything?q=${Input}&from=2022-04-18&sortBy=publishedAt&apiKey=9e8bb3773cd149b7bcfd717a9f1b85f9`
    axios.get(url).then((response) => {
            console.log(response.data);
            setResult(response.data.articles)
    });
  }
  
  return(
    <>
        <AppBar title={"뉴스검색"}/>
        {/*뉴스 검색*/}
        <SearchInput
          handleChange={inputHandleChange}
          handleClick={ButtonHandleClick}>
        </SearchInput>
        {/*결과 출력*/}
        <SearchResult Result={Result}></SearchResult>
    </>
  )
}

export default NewsApiPage