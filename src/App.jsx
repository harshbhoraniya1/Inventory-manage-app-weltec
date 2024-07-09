import { Link, Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import withTitle from './MyLayout'
import ProductGrid from './product/ProductGrid'
import ProductAdd from './product/ProductAdd'
import ProfileGrid from './profile/ProfileGrid'
import EditProductForm from './editForm/EditProductForm'


function App() {

  const DashBoard = withTitle(ProductGrid)
  const AddProduct = withTitle(ProductAdd)
  const Profile = withTitle(ProfileGrid)
  const EditProduct = withTitle(EditProductForm)
  

  return (
    <>
    
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/myproduct' element={<DashBoard/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/myprofile' element={<Profile/>}/>
        <Route path='/editProduct' element={<EditProduct/>}/>
      </Routes>
    </>
  )
}

export default App