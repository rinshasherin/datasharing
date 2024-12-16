import { useState } from 'react'
import './App.css'
import Parent from './Parent'

function App() {

  return (
    <>
      <div className='border shadow mt-5 p-3' style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h2>Parent-Child Communication</h2>
        <Parent />
      </div>
    </>
  )
}

export default App
