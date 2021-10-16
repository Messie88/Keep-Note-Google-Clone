import Header from './components/header'
import AddNote from './components/notes/components/addNotes'
import EmptyMessage from './components/emptyMessage'
import NoteCard from './components/notes/components/noteCard'
import NoteList from './components/notes'

import { useAppSelector } from './redux/hooks'

function App() {
  // const [disabledPopup, setDisabledPopup] = useState(false)
  // const [notes, setNote] = useState([
  //   {
  //     title: '',
  //     content: '',
  //   },
  // ])
  const notes = useAppSelector((state) => state.notes.notes)

  // const filteredNotes = notes.filter((note) => {
  //   return (note.title.length || note.content.length) > 0
  // })

  return (
    <div className='App'>
      <Header />
      {/* <AddNote closed={disabledPopup} notes={setNote} /> */}
      <AddNote />
      {notes.length === 0 ? (
        <EmptyMessage />
      ) : (
        <NoteList>
          {/* {filteredNotes.map((note, id) => ( */}
          {notes.map((note, id) => (
            <NoteCard key={id} title={note.title} content={note.content} />
          ))}
        </NoteList>
      )}
    </div>
  )
}

export default App
