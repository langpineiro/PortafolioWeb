import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Inicio from './Components/Inicio'
import Contact from './Components/FormContacto'
function App() {
  return (
    <>
     <Navbar/>
       <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </>
  )
}

export default App
