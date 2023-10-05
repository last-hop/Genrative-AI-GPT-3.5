import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const Signup =()=>{
  const [data ,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    age:"",
    address:"",
    proffesion:"",
    gender:"",
    password:"",

  })
  const [error,setError]=useState("");
  const navigate=useNavigate();

  const handleChange=({currentTarget:input})=>{
    console.log(input.name,input.value);
    setData({...data,[input.name]:input.value});

  }

  const handleSubmit = async(e) =>{
  e.preventDefault();
  
    try{
      
      const url="http://localhost:9000/api/signup";
      const {data:res} = await axios.post(url,data);
      navigate("/login");
      console.log(res.message);

      
      console.log(res);

    }
    catch(error){
      if(error.response&&
        error.response.status >=400 &&
        error.response.status <=500){
          setError(error.response.data.message);

        }
    }

  };

    return(
        <>
        <div className={styles.login_container}>
        <div className={styles.continer_1}>
         <form className={styles.formcontainer} onSubmit={handleSubmit}>
         <h1>Sign Up </h1>
         <input
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                className={styles.inputfeild}
                type="text"
                required
                placeholder="First Name"
              />

              <input
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                className={styles.inputfeild}
                type="text"
                placeholder="Last Name"
              />   
                
              <input  
                name="email"
                value={data.email}
                onChange={handleChange}
                lrquired
                className={styles.inputfeild}
                type="email"
                placeholder="E-mail"
              />



               <input  
                name="address"
                value={data.address}
                onChange={handleChange}
                lrquired
                className={styles.inputfeild}
                type="text"
                placeholder="Address"
              />
                  <input  
                name="age"
                value={data.age}
                onChange={handleChange}
                required
                className={styles.inputfeild}
                type="Number"
                placeholder="Age"
              />
               <input  
                name="proffesion"
                value={data.proffesion}
                onChange={handleChange}
                lrquired
                className={styles.inputfeild}
                type="text"
                placeholder="Proffession"
              />
                  <input  
                name="gender"
                value={data.gender}
                onChange={handleChange}
                lrquired
                className={styles.inputfeild}
                type="text"
                placeholder=" Male / Female"
              />

              <input
                name="password"
                onChange={handleChange}
                value={data.password}
                className={styles.inputfeild}
                type="password"
                placeholder="Password"
              />

                <button
                  className={styles.inputbutton}
                 type="submit"
                  
                >Sign Up</button>
                <Link to="/login">
                <div >Already have a Account ? Log In</div>
                </Link>
 
                      

         </form>



       </div></div>
    </>
    )
};

export default Signup;