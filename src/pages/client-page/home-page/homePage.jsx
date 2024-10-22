 
import Header from "../../../components/header/header.jsx";

export default function HomePage() {
    return(
         <> 
           <Header/>
         
        <div className="w-full h-screen bg-[#b89c3b] text-[30px] flex flex-col justify-center items-center bg-[url('/public/hotel-bg.jpg')]"> 


<div className="justify-center items-center">
    <h1 className="text-[5em] text-center font-semibold  text-white stroke-black">Welcome to the villa   </h1> 
   
</div> 

<div className=" bg-black text-[30px] flex p-[20px] rounded-[20px] mt-[1em]">
        <p className="font-medium p-[10px] text-[#b89c3b]">Start Date :</p>
        <input type="date" className="border-2 p-[5px] rounded-lg"/>
        <p className="font-medium p-[10px]  text-[#b89c3b]">  End Date :</p>
        <input type="date" className="border-2 p-[5px] rounded-lg"/>
        <p className="font-medium p-[10px]  text-[#b89c3b]">Room Type :</p>
        <select className="border-2  p-[5px] rounded-lg">
            <option> Luxury </option>
            <option> Normal </option>
            <option> Low </option> 
        </select>
    
</div> 

</div>
         
        </>
    ) 
} 
