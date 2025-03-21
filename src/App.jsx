import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserModal from './components/UserModal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h1>User Details Modal</h1>
      <button style={{background: 'lightblue'}} onClick={() => setOpen(true)}>Open Form</button>
      {open ? <UserModal setOpen={setOpen}/> : null}
    </>
  )
}

export default App
