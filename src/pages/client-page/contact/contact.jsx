import Header from "../../../components/header/header.jsx";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="w-full text-[10px] flex justify-center items-center h-[10vh] bg-orange-300">
        <h1 className="text-[5em] font-semibold text-white text-center">Contact</h1>
      </div>

      <div className="w-full text-[10px] flex justify-center items-center h-[50%] bg-white pr-[10em] pl-[10em] pt-[10em] pb-[10em]">
        
        {/* Contact Details Column */}
        <div className="w-[50%] text-[10px] flex flex-col bg-white pt-[5em] text-left ">
          <h1 className="text-black text-[40px] font-bold">Contact Details</h1>
          <p className="text-black text-[20px]">
            <FaMapMarkerAlt className="inline-block mr-2" /> Melbourne
          </p>
          <p className="text-black text-[20px]">
            <FaPhoneAlt className="inline-block mr-2" /> 03 123 1231
          </p>
          <p className="text-black text-[20px]">
            <FaEnvelope className="inline-block mr-2" /> test@email.com
          </p>
        </div>

        {/* Form Column */}
        <div className="w-[50%] text-[10px] flex flex-col bg-white">
          <h1 className="text-black text-[40px] font-bold">Contact Form</h1>
          <form className="flex flex-col space-y-4 pt-[2em] text-[20px]">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 p-3 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
