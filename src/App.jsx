import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Faculty from './Faculty'


function App() {
  

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'  element={<h1>Darshan University</h1>}></Route>
        <Route path='/faculties' element={<Faculty/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
