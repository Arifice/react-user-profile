import User from "../User/User";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users=useLoaderData();    
    console.log(users);
    return (
        <div>
            <h1 className="text-center mt-10 text-5xl font-bold text-white">Users List : {users.length}</h1>
            <div className="grid grid-cols-2 gap-8 mt-10">
                {
                    users.map(user=><User key={user.id}user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;