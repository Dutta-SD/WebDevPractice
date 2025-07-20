import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/about/About'
import Party from './components/about/Party'

function App() {
  return (
    <Routes>
      <Route path='/about' element={<About person={"farmer"} />} />
      <Route path='/party' element={<Party />} />
    </Routes>

  )
}


export default App
