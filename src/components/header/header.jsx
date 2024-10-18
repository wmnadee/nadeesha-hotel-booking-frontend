 import { Link } from "react-router-dom";
import UserTag from "../userdata/userdata.jsx";
 //import "./header.css";
 function Header() { 

  return (
   
    <header className="w-full bg-[#ffffff] flex p-[10px] items-center"> 
    <img src="../public/logo-2.jpg" className=" w-[250px] h-[100%]"/>

    <UserTag imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" name="Nadeesha"/>

    <div className="text-[30px] flex p-[20px] rounded-[20px] mt-[1em] flex flex-row text-center">
                        <Link to="/about" className="font-medium p-[10px] text-[#b89c3b]">About</Link>
                        
                        <Link to="/contact" className="font-medium p-[10px] text-[#b89c3b]"> Contact</Link>
                         
                        <Link to="/gallery" className="font-medium p-[10px] text-[#b89c3b]">Gallery</Link>
                        

                </div> 
          
            
    </header> 
  )
}

export default Header;
