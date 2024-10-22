import Header from "../../../components/header/header.jsx";
export default function About() {
  return (
    <>
      <Header/>
      <div className="w-full text-[10px] flex justify-center items-center h-[10vh] bg-orange-300">
        <h1 className="text-[5em] font-semibold text-white text-center">About</h1> 
      </div>

      <div className="w-full text-[10px] flex justify-center items-center h-[50%] bg-white pr-[10em] pl-[10em] pt-[10em] pb-[10em]">

              <div className="w-[50%] text-[10px] flex flex-col  bg-white pt-[5em]">
                <h1 className="text-black text-[40px] font-bold">About Villa</h1>
                <p className="text-black text-[20px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                </p>
                
                
              </div>

              <div className="w-[50%] text-[10px] flex  bg-white">
                <img src="./public/hotel.jpg"/>
              </div>
         
      </div>

    </>
  );
}
