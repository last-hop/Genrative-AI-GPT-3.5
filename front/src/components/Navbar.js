import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

import {AppBar,Button,Tab,Tabs ,Toolbar, Typography , useTheme,useMediaQuery} from "@mui/material";
//import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './Drawer';
const Navbar = () => {
  const [error,setError]=useState("");
  const navigate=useNavigate();
    const[ value ,setValue]=useState();
   const theme=useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    
    const handlelogout = async(e) =>{
      e.preventDefault();
      
        try{
         window.localStorage.clear();
         navigate("/",{replace:true});
    
        }
        catch(error){
          if(error.response&&
            error.response.status >=400 &&
            error.response.status <=500){
              setError(error.response.data.message);
    
            }
        }
    
      };
    
    const PAGES=[""];

  return (
    <React.Fragment>
    <AppBar sx={{background: "#063970"}}>
    <Toolbar>
    <Typography sx={{fontSize:'1.5rem',paddingLeft:'4px'}}> Generative AI</Typography>
    {
       <>
      <Button  onClick={handlelogout}   sx={{marginLeft:'auto',backgroundColor:"white",color:"black"}} variant='Contained'>
       Log out{" "}
      </Button>
       
     
      </>
        
    }
   </Toolbar>
  
    </AppBar>
    </React.Fragment>
  )
}

export default Navbar;