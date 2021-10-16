import React from 'react'

import * as S from './Search.styled'

const Search = () => {
  return (
    <S.Search
      type='search'
      name='search'
      placeholder='Search for notes'
      value=''
      onChange={() => true}
    />
  )
}

export default Search
