import React from 'react'

const SearchResult = ({Result}) => {
  return (
    <>
        {
            Result.map(({title})=>{
                return (<p>{title}</p>)
            })
        }
    </>
  )
}

export default SearchResult