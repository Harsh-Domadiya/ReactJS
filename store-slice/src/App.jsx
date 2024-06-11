import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { kaju } from './slice/slice';
import Input from './input';


function App() {

  const dispatch = useDispatch();

  const [input, setName] = useState(" ");

  console.log(" Name update")

  return (
    <>
      <Input></Input>
    </>
  )
}

export default App;
