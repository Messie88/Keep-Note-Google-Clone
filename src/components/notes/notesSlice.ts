import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NotesState {
  title: string
  content: string
}

const initialState = {
  notes: [] as NotesState[],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // Add notes
    addNote: (state, action: PayloadAction<NotesState>) => {
      state.notes.push(action.payload)
    },
    // Delete notes
    // Update notes
  },
})

export const { addNote } = notesSlice.actions

export default notesSlice.reducer
