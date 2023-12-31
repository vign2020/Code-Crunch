import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from "react-router-dom"

export default function Logout() {
    const [cookie, setCookie, removeCookie] = useCookies(['AuthToken' ,'CurrentUser']);
    const history=useNavigate();

// Remove cookie
    const handleDeleteToken = () => {   
        removeCookie('AuthToken');
        removeCookie('CurrentUser');
        
        history("/login")
    };
    
  return (
    <div>
    <button onClick={handleDeleteToken}>Logout</button>

    </div>
  )
}
