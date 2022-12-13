import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Inicio from './Components/Inicio'
import Footer from './Components/Footer'
function App() {
  return (
    <>
     <Navbar/>
       <Routes>
          <Route path='/' element={<Inicio/>} />
       </Routes>
    </>
  )
}

export default App
