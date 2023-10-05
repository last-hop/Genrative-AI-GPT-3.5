import React ,{useState} from 'react'
import Navbar from '../components/Navbar'
import DrawerComp from '../components/Drawer'
import Genrate from '../components/generate';
import styles from "./styles.module.css";


const Home = () => {

 


  return (
    <>

    <Navbar/>
   
    <div className={styles.home_cont}> 
    <DrawerComp/>
    
    <Genrate/>
     </div> 
    </>
  )
}

export default Home