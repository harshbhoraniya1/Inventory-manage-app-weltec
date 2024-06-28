import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import Dashbord from './Dashbord'


function App() {

  return (
    <>
    <ul>
      <li><Link to={'/registration'}>Registration</Link></li>
      <li><Link to={'/login'}>Login</Link></li>
      <li><Link to={'/dashboard'}>Dashboard</Link></li>
    </ul>
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashbord />}/>
      </Routes>
    </>
  )
}

export default App
