import React from 'react'

import Search from '../search'

import * as S from './Header.styled'

const Header = () => {
  return (
    <S.Container>
      <h3>NOTE</h3>
      <Search />
      <a href='/'>Menu</a>
    </S.Container>
  )
}

export default Header
