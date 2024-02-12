
import './App.css'
import Home from './coponents/Home';
import Menu from './coponents/Menu';
import Navbar from './coponents/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>


<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>








    </>
  )
}

export default App
