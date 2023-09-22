/* eslint-disable react/prop-types */
import {   useNavigate } from "react-router-dom";

const User = ({user}) => {
    const navigate=useNavigate();
    const {name,img,id}=user;
    console.log(user);
    const handledetails=()=>{
        navigate(`/user/${id}`)
    }
    return (
        <button onClick={handledetails}>
            
                <div className="bg-yellow-500 p-6  flex gap-4 items-center text-black text-2xl rounded-lg shadow-xl font-bold">
                    {/* <div>
                        <img className="w-16 h-16 rounded-full" src={img} alt="" />
                    </div> */}
                    <div>
                        <h1>{name}</h1>                        
                    </div>
                    
                </div>
                      
        </button>
    );
};

export default User;