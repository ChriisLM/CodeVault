import './App.css'
import Animaciones from './pages/Animaciones'
import Cards from './pages/Cards'
import Inicio from './pages/inicio'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Animaciones' element={<Animaciones />}/>
        <Route path='/Cards' element={<Cards />}/>
        <Route path='/Botones' element={<Inicio />}/>
        <Route path='*' element={<Inicio />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
