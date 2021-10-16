import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../redux/hooks'
import { addNote } from '../../notesSlice'

import * as S from './AddNote.styled'

// interface Props {
//   closed: boolean
//   notes: React.Dispatch<
//     React.SetStateAction<
//       {
//         title: string
//         content: string
//       }[]
//     >
//   >
// }

const AddNote = (/*props: Props*/): JSX.Element => {
  const dispatch = useAppDispatch()
  // const { closed, notes } = props

  const [clicked, setClicked] = useState(false)
  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  const handleClick = (e: { preventDefault: () => void }) => {
    setClicked(true)
  }

  // Takes the note typed
  const handleChange = (e: any) => {
    const { value, name } = e.target
    setNote((prevNote) => {
      return { ...prevNote, [name]: value }
    })
  }

  // Dispatch the note on the store
  const handleSubmit = (e: React.SyntheticEvent) => {
    // notes((prev) => {
    //   return [...prev, note]
    // })
    dispatch(addNote(note))

    setNote({
      title: '',
      content: '',
    })
    setClicked(false)
    e.preventDefault()
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      {clicked ? (
        <S.NoteTitle
          type='text'
          name='title'
          id=''
          placeholder='Title'
          value={note.title}
          onChange={handleChange}
        />
      ) : null}
      <S.NoteContent
        name='content'
        id=''
        placeholder='Create a note'
        value={note.content}
        onClick={handleClick}
        onChange={handleChange}
      />
      {clicked && <S.SubmitButton type='submit'>+</S.SubmitButton>}
    </S.FormContainer>
  )
}

export default AddNote
