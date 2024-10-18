//import "./userdata.css"

function UserTag(props){

    const name = props.name;

    //console.log(props.names);
    return (
        
        <div className='flex text-[30px] absolute right-10 justify-center items-center '>
            <img className="rounded-full" 
            src={props.imageLink}  
            style={{width:"50px"}}
            />
             
            <span className="text-black ml-[5px] text-xl cursor-pointer items-center">{props.name}</span>
        </div>
    );

    
}
export default UserTag;