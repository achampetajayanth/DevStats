import React from 'react';
import { useAuth0,  } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import MainPage from './MainPage';
import { useEffect } from 'react';
const Navbar = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await loginWithRedirect();
      };

      useEffect(() => {
      if(isAuthenticated){
        navigate('/Dashboard');
      }
      }, [isAuthenticated,navigate]);
      
    const menuOptions=[{
        text:"Home"
    },
          {
            text:"Login"
          }
                       ]
  return (
    <nav>
    <div className='TitleDev'>DevStats</div>
    <div className="navbar-links-container">
        <a href=''>Home</a>
        <button  onClick={handleLogin}>Login</button>
    </div>
    
    </nav>
  )
}

export default Navbar
