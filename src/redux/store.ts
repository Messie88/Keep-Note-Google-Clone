import { configureStore } from '@reduxjs/toolkit'

import notesSlice from '../components/notes/notesSlice'

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
