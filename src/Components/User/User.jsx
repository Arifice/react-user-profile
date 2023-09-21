/* eslint-disable react/prop-types */
import {  NavLink } from "react-router-dom";

const User = ({user}) => {
    const {name,id}=user;
    return (
        <div>
            <NavLink to={`/user/${id}`}>
                <div className="bg-yellow-500 p-6  flex gap-4 items-center text-black text-2xl rounded-lg shadow-xl font-bold">
                    <h1>{name}</h1>
                    
                </div>
            </NavLink>            
        </div>
    );
};

export default User;