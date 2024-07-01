import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HamburgerButton from '../Components/HamburgerButton/HamburgerButton';

function NavBar() {

  const [mobileOpen, setMobileOpen] = useState(false)
  
  function toggleMobileOpen(event){
    console.log(mobileOpen)
    
    setMobileOpen(prevState => !prevState);
  }
  return (
    <nav className="max-w-[1200px] mx-[auto] flex flex-row justify-between mt-6"> 
      <div className='flex align-middle pl-10'>
        <div className='flex gap-2'>
          <img  className="h-8 mt-2" src="icons/logo.svg" alt="Saastream Icon" />
          <span className='font-bold mb-0 py-2 text-white text-base '>SaaStream</span>
        </div>
      </div>
      <ul className={"lg_t:flex font-medium lg_t:flex-row lg_t:justify-between items-center  " + (mobileOpen ? 'mobile-open' : 'mobile-closed')}>
      
        <NavLink className={({isActive}) =>(isActive ? "nav-link-active": "nav-link")} to="/" end>Home</NavLink>
        <NavLink className={({isActive}) =>(isActive ? "nav-link-active": "nav-link")} to="/pageThree" end>About</NavLink>
        <NavLink className={({isActive}) =>(isActive ? "nav-link-active": "nav-link")} to="/pageThree" end>Pricing</NavLink>
        <NavLink className={({isActive}) =>(isActive ? "nav-link-active": "nav-link")} to="/pageThree" end>Contact</NavLink>
        
      </ul>
      
      <p className='hidden lg_t:block text-white mt-2'>
        <NavLink className="button-outline mr-4">Sign In</NavLink>
        <NavLink className="button-solid">Home</NavLink>
      </p>

      {/* <div className='lg_t:hidden pr-10 text-white z-20' onClick={toggleMobileOpen}>hello</div> */}
      <div className="lg_t:hidden mr-10">
      <HamburgerButton   setState={setMobileOpen}  />
      </div>
    </nav>
  )
}

export default NavBar