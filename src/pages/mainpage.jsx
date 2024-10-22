import { Route, Routes } from "react-router-dom";

import AdminPage from "./admin-page/admin";
import About from "./client-page/about/about";
import HomePage from "./client-page/home-page/homePage";
import Contact from "./client-page/contact/contact";
 
export default function MainPage() {
    return (
      <>
    
      <Routes path="/*" >
            <Route path="/" element={<HomePage />}/> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/admin" element={<AdminPage />} /> 
        </Routes> 

          
      </>
    );
  }
  