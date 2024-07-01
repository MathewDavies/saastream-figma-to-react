import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function Template() {
  return (
    <div className='page'>
    <NavBar/>
    <Outlet/>
    <Footer/>
    
    </div>
  )
}

export default Template