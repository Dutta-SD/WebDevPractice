import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/about/About'

function App() {
  return (
    <Routes>
      <Route path='/about' element={<About person={"farmer"}/>} />
    </Routes>

  )
}


export default App
