
import { Link, Route, Routes } from "react-router-dom"
import PageNotFound from "./pageNotFound"
export default function AdminPage(){
    return(
        <>
        <div className="w-full h-[100vh] bg-[#0e0d0d]"> 
            
            <h1 className="text-[1.5em] text-center font-semibold  text-white stroke-black p-[1em]">
                ADMIN PAGE
                </h1> 
           
           
            <div className="w-full h-[100vh] bg-[#b89c3b] ">
                
                <Routes path="/*"> 
                    <Route path="/rooms" element={ 
                        <div>
                            Rooms
                        </div>
                    }/> 
                    <Route path="/booking" element={
                        <div>
                            Bookings 
                        </div>
                    }/> 
                    <Route path="/category" element={
                        <div>
                            categories
                        </div>
                    }/> 

                     <Route path="/*" element={<PageNotFound/>}/> 
                </Routes>

            </div>

        </div>
        </>
    )
}
