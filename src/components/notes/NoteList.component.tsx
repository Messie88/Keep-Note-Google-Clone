import React from 'react'

import * as S from './NoteList.styled'

interface Props {
  children: JSX.Element[]
}

const NoteList = ({ children }: Props): JSX.Element => {
  return <S.Container>{children}</S.Container>
}

export default NoteList
