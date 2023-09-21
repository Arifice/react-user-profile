import { useLoaderData } from "react-router-dom";

const Userdetails = () => {
    const user=useLoaderData();
    console.log('details ',user);
    const {name,address,company,email,website,phone,username}=user;
    return (
        <div className="bg-sky-500 mx-10 my-32 p-10">
            <h1 className=" text-5xl text-white text-center rounded-lg shadow-2xl font-bold">User details : </h1>
            <div className=" p-10 text-2xl m-5 text-white font-semibold bg-green-400 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold">Name : {name}</h1>
                <p>Email : {email}</p>
                <p>Username: {username}</p>
                <p>Website : {website}</p>
                <p>Phone : {phone}</p>

                <p>Address: 
                 <p>
                    <span> street: {address?.street}</span>
                    <span> city: {address?.city}</span>
                    <span> Zipcode: {address?.zipcode}</span>
                    <p>Geo: lat: {address.geo.lat} lng:{address.geo.lng}</p>
                    <p>Company name : {company.name}</p>
                    <p>Type : {company.bs}</p>
                 
                 </p>  
                 
                </p>
            </div>
        </div>
    );
};

export default Userdetails;