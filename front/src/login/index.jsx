import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const Login =()=>{
  const [data ,setData]=useState({
     email:"",
    password:"",


  })
  const [error,setError]=useState("");
  const navigate=useNavigate();

  const handleChange=({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});

  }

  const handleSubmit = async(e) =>{
  e.preventDefault();
  
    try{
      const url="http://localhost:9000/api/signin";
      const  {data:res} = await axios.post(url,data);
      navigate("/home");
      console.log(res.message);

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
         <h1>Log In </h1>
          
                
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
                  
                >Log In</button>
                <Link to="/signup">
                <div>Create Account ? Sign up</div>
                </Link>
 


         </form>



       </div></div>
    </>
    )
};

export default Login;