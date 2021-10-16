import React from 'react'

import * as S from './NoteCard.styled'

interface Prop {
  title: string
  content: string
}

const NoteCard = ({ title, content }: Prop) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <p>{content}</p>
    </S.Container>
  )
}

export default NoteCard
