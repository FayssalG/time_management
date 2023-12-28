import './global.css';
import Home from "./pages/Home/Home";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import PartOne from './pages/PartOne/PartOne';
import 'aos/dist/aos.css';
import AOS from 'aos';
import PartTwo from './pages/PartTwo/PartTwo';
AOS.init({
  offset:200,
  delay:50,
  duration:1000
});
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />          
          <Route path='/intro' element={<Intro/>} />     
          <Route path='/part-1' element={<PartOne/>} />          
          <Route path='/part-2' element={<PartTwo/>} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
