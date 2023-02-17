import React from 'react'
import './Header.css'
import { useLocation, useNavigate } from 'react-router'

const Header = () => {
  const location = useLocation()
  const pathname = location.pathname

  const navigate = useNavigate()

  

  return (
    

    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
          alt="logo" className="h-5 cursor-pointer"
          onClick={()=>(navigate("/"))}/>
        </div>
        <div>
          <ul className='headerDiv'>
            <li className={pathname =='/' ? 'focused':'nonFocused'} onClick={()=>(navigate("/"))}>Home</li>
            <li className={pathname =='/offers' ? 'focused':'nonFocused'} onClick={()=>(navigate("/offers"))}>Offers</li>
            <li className={pathname =='/sign-in' ? 'focused':'nonFocused'} onClick={()=>(navigate("/sign-in"))}>Sign in</li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header