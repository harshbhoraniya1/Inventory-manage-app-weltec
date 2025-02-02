import { Link, Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import withTitle from './MyLayout'
import ProductGrid from './product/ProductGrid'
import ProductAdd from './product/ProductAdd'
import ProfileGrid from './profile/ProfileGrid'
import EditProductForm from './editForm/EditProductForm'
import EditProfile from './profile/EditProfile'
import ProductDetail from './view/ProductDetail'
import ContactUsForm from './contactUs/ContactUsForm'


function App() {

  const DashBoard = withTitle(ProductGrid)
  const AddProduct = withTitle(ProductAdd)
  const Profile = withTitle(ProfileGrid)
  const EditProduct = withTitle(EditProductForm)
  const EditAdminProfile = withTitle(EditProfile)
  const ViewProduct = withTitle(ProductDetail)
  const ContactUS = withTitle(ContactUsForm)
  

  return (
    <>
    
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/myproduct' element={<DashBoard/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/myprofile' element={<Profile/>}/>
        <Route path='/editProduct/:id' element={<EditProduct/>}/>
        <Route path='/viewProduct/:id' element={<ViewProduct/>}/>
        <Route path='/editProfile' element={<EditAdminProfile/>}/>
        <Route path='/contact-us' element={<ContactUS/>}/>
      </Routes>
    </>
  )
}

export default App