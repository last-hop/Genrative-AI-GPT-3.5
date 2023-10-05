import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {Button} from "@mui/material";
import { NavLink } from 'react-router-dom';

const DrawerComp = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",

        },
        {
          path:"/login",
          name:"Login",

      },
      {
        path:"/signup",
        name:"Signup",
       
    },
    {
      path:"/logout",
      name:"Q&A",
     
  },
    
      
    ]

    const [error,setError]=useState("");
    const navigate=useNavigate();
   

  
      
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px", paddingTop:'30px'}} className="sidebar">
               <div className="top_section">

                  
                  
               </div>
            

  {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default DrawerComp