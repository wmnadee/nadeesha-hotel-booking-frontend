export default function PageNotFound(){
    return(
        <>
        <div className="w-full h-screen bg-[#b89c3b] flex flex-col justify-center items-center">
            <h1 className="text-[5em] text-center font-semibold  text-white stroke-black">404</h1>
            <h3 className="text-[5em] text-center font-semibold  text-white stroke-black">This page not Found.</h3>
            <button className="bg-black text-white p-[1em] rounded-[10px]">Go Back To Home</button>
        </div>
        </>
    )
}
