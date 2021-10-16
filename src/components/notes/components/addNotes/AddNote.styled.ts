import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 400px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 0;
`

export const NoteTitle = styled.input`
  width: 90%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
`

export const NoteContent = styled.textarea`
  width: 90%;
  background: transparent;
  outline: none;
  border: none;
  resize: none;
  outline: none;
  border-bottom: 1px solid lightgrey;
  padding-top: 10px;
`

export const SubmitButton = styled.button`
  border: none;
  background: transparent;
  position: relative;
  right: -170px;
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
`
