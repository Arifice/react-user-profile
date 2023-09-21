/* eslint-disable react/prop-types */
import {   useNavigate } from "react-router-dom";

const User = ({user}) => {
    const navigate=useNavigate();
    const {name,id}=user;
    const handledetails=()=>{
        navigate(`/user/${id}`)
    }
    return (
        <button onClick={handledetails}>
            
                <div className="bg-yellow-500 p-6  flex gap-4 items-center text-black text-2xl rounded-lg shadow-xl font-bold">
                    <h1>{name}</h1>
                    
                </div>
                      
        </button>
    );
};

export default User;