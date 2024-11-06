
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Footer from './Pages/Footer'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      <Footer />
     </BrowserRouter>
     </>
  )
}

export default App
