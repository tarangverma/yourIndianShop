import React, { useContext, useState } from "react";
import "../stylesheet/Nav.css";
import IconButton from "@mui/material/IconButton";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
// import CalculateIcon from "@mui/icons-material/Calculate";
import { Link, useNavigate } from "react-router-dom";

import {fetchreq,uploadImageAws,jwtauth} from "../Helper/fetch";
import { MyContext } from "../App";


const Nav = () => {
  const {user,setUser,isLogin,setIsLogin}=useContext(MyContext);
  const nav  = useNavigate();
  const [si,setSi]=useState("Sign In");
  const othenticate = async ()=>{
    if(isLogin){
      localStorage.clear();
      setIsLogin(false);
      setUser(null);
    }else{
      setSi("Sign In...")
      const a = await jwtauth();
      if(a){
        setIsLogin(true);
        const users = a.result[0];
        setUser(users);
        if(users.Status==0){
          nav('/plan')
        }else{
          nav("/dashboard")
        }
      }else{
        nav("/signIn")
      }
      setSi("Sign In")
    }
  }
  return (
    <>
      <nav>
        <div id="logo">
          <span id="blue">Ship</span>
          &nbsp;
          <img src="./imgs/3.png" height={"35px"} alt="" />
          &nbsp;
          <span id="org">Box</span>
        </div>
        <div id="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Service</a>
          <a href="/">Track</a>
          <a href="/">Shop</a>
          <a href="/">Contact</a>
        </div>

        <div className="nav-right">
          <Link to="/calc">
            <IconButton aria-label="Cost Calculator">
              <CalculateOutlinedIcon id="calc-icon" />
            </IconButton>
          </Link>
          <div id="log" className="btn btn-b">
            <a onClick={othenticate}>{isLogin?"LogOut":si}</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
