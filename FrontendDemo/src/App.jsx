import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserReg from './pages/UserReg/UserReg'
import UserLogin from './pages/UserLogin/UserLogin';
import FormHead from './components/FormHead/FormHead';
import LandingNavbar from './components/LandingNav/LandingNav';
import Home from './components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<LandingNavbar/>,<FormHead title='Login'/>,<UserLogin />]} />
        <Route path='/user_reg' element={[<LandingNavbar/>,<FormHead title='Registration'/>,<UserReg />]} />
        <Route path='/user_home' element={[<Home/>]} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
