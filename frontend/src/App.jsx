import './style/App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import AddTask from './components/AddTask'
import UpdateTask from './components/UpdateTask'
import List from './components/List'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </>
  )
}

export default App
