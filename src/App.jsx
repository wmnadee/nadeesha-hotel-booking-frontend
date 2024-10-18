
import "./App.css"; 
import HomePage from "./pages/client-page/homePage";
import AdminPage from "./pages/client-page/adminPage"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/client-page/pageNotFound";

function App() { 

  return (
    
    <BrowserRouter>

      <Routes path="/*">

        <Route path="/" element={<HomePage/>}/> 
        <Route path="/admin/*" element={<AdminPage/>}/> 
        <Route path="/*" element={<PageNotFound/>}/>  
        
      </Routes> 
    
    </BrowserRouter>
     
  ); 

}

export default App
