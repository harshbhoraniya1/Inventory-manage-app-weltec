import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import withTitle from './MyLayout'
import ProductGrid from './product/ProductGrid'
import ProductAdd from './product/ProductAdd'


function App() {

  const DashBoard = withTitle(ProductGrid)
  const AddProduct = withTitle(ProductAdd)
  

  return (
    <>
    
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/myproduct' element={<DashBoard/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App