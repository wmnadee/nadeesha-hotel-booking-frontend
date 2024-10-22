 import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import UserTag from "../userdata/userdata.jsx"; 
 
 function Header() { 

  return (
   
    <header className="w-full bg-[#ffffff] flex p-[10px] items-center"> 
     <Link to="/" className="font-medium p-[10px] text-[#b89c3b]"> 
    <img src="../public/logo-2.jpg" className=" w-[250px] h-[100%]"/>
    </Link>

    <Link to="/admin" className="font-medium p-[10px] text-[#b89c3b]"> 
    <UserTag imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" name="Nadeesha"/></Link>

    <div className="text-[30px] flex p-[20px] rounded-[20px] mt-[1em] flex flex-row text-center">
   
            <Link to="/about" className="font-medium p-[10px] text-[#b89c3b]">About</Link> 
                        
                        <Link to="/contact" className="font-medium p-[10px] text-[#b89c3b]"> Contact</Link>
                        

                </div> 
          
            
                     
    </header> 
  )
}

export default Header;
