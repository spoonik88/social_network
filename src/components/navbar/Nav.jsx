import React from "react";
import "./Nav.scss";
import logo from './../../images/svg-landscaping-logo-1.svg';

const Nav= () =>{
    return <nav className="sidebar">
      <div className="logo"><img src={logo} alt="trianglify"/></div>
      <div className="panel-block dark">      
      <div><a href="#">Profile</a></div>
 <div><a href="#">Masseges</a></div>
 <div><a href="#">News</a></div>
 <div><a href="#">Music</a></div>
 <div><a href="#">Settings</a></div>
        </div>      
   
   
   
   
   
    <div class="panel-block light">
			<div><a href="">Photos</a></div>
      <div><a href="">Watch</a></div>
      <div><a href="">People</a></div>
      <div><a href="">Groups</a></div>
      <div><a href="">Adverts</a></div>
      <div><a href="">Shop</a></div>
      <div><a href="">Jobs</a></div>
      <div><a href="">Forums</a></div>
      <div><a href="">Blog</a></div>     

</div>		

  </nav>
    
    
}
export default Nav;
