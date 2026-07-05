import { useState } from 'react'
import './App.css'
import { Input } from './UI/Input/Input'
import logInIcon from './assets/arrow-left-on-rectangle.svg';
function App() {
  const [text, setText] = useState("");
  return (
    <>
      <Input
        value={text}
        placeholder='введите текст'
        type='text'
        onChange={(e) => setText(e.target.value)}
        icon={logInIcon}/>
    </>
  )
}

export default App
