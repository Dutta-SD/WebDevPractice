import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/about/About'
import Party from './components/party/Party'
import Clock from './components/clock/Clock'

function App() {
  return (
    <Routes>
      <Route path='/about' element={<About person={"farmer"} />} />
      <Route path='/party' element={<Party />} />
      <Route path='/clock' element={<Clock/>} />
    </Routes>

  )
}


export default App
