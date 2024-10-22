
import "./App.css";  
import AdminPage from "./pages/admin-page/admin"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import MainPage from "./pages/mainpage";

function App() { 

  return (
     
    <BrowserRouter>

      <Routes path="/*">

       
        <Route path="/admin/*" element={<AdminPage/>}/> 
        
        <Route path="/*" element={<MainPage/>}/> 
        
      </Routes> 
    
    </BrowserRouter>
    
     
  ); 

}

export default App
