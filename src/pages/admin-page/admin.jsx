import { Link, Route, Routes } from "react-router-dom";
import { LuBookOpenCheck } from "react-icons/lu";
import { AiOutlineAppstore, AiOutlineUser, AiOutlinePicture, AiOutlineHome } from "react-icons/ai";
import AdminBooking from "./adminBooking";
import Category from "./category";
import Rooms from "./rooms";
import Users from "./users";
import GalleryItems from "./galleryItems"; 


 

export default function AdminPage() {
  return (
    <>

      <div className="w-full  max-h-[100vh] bg-red-200 flex overflow-y-hidden">
        {/* Sidebar */} 
        <div className="w-[20%] h-screen bg-white flex-row">
          <div>
            <img src="../public/logo-2.jpg" className="w-[100%] h-[100%]" />
          </div>

          <h1 className="text-[25px] p-8 text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </h1>

          {/* Menu Links */}
          <div className="p-8 bg-sky-500 text-[30px] text-white hover:font-bold  border-b-2 border-white">
            <Link to="/admin/bookings" className="flex items-center space-x-2">
              <LuBookOpenCheck />
              <span>Bookings</span>
            </Link>
          </div>

          <div className="p-8 bg-sky-500 text-[30px] text-white hover:font-bold border-b-2 border-white">
            <Link to="/admin/categories" className="flex items-center space-x-2">
              <AiOutlineAppstore />
              <span>Categories</span>
            </Link>
          </div>

          <div className="p-8 bg-sky-500 text-[30px] text-white hover:font-bold  border-b-2 border-white">
            <Link to="/admin/rooms" className="flex items-center space-x-2">
              <AiOutlineHome />
              <span>Rooms</span>
            </Link>
          </div>

          <div className="p-8 bg-sky-500 text-[30px] text-white hover:font-bold  border-b-2 border-white">
            <Link to="/admin/users" className="flex items-center space-x-2">
              <AiOutlineUser />
              <span>Users</span>
            </Link>
          </div>

          <div className="p-8 bg-sky-500 text-[30px] text-white hover:font-bold  border-b-2 border-white">
            <Link to="/admin/galleryItems" className="flex items-center space-x-2">
              <AiOutlinePicture />
              <span>Gallery Items</span>
            </Link>
          </div>

          <h1 className="text-[25px] p-3 text-center bg-blue-900 font-bold text-white hover:text-orange-400">
            Contact Number : 078 000 0000
          </h1>
        </div>

        {/* Main Content */}
        <div className="w-[80%] max-h-[100vh] bg-blue-950 p-10 overflow-y-scroll">
          <Routes path="/*"> 
            <Route path="/bookings" element={<AdminBooking />} />
            <Route path="/categories" element={<Category />} /> 
            <Route path="/rooms" element={<Rooms />} /> 
            <Route path="/users" element={<Users />} /> 
            <Route path="/galleryItems" element={<GalleryItems />} /> 
          </Routes>

        </div>
      </div>
    </>
  );
}
