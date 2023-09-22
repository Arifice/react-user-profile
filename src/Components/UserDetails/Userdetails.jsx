
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Userdetails = () => {
    // const users=useLoaderData();
    // console.log('userDetails',users);
     
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate('/')
    }
    const users=useLoaderData();
    console.log('details ',users);
    const {userId}=useParams();
    const user=users.find(user=>user.id==userId);  

    const {name,address,company,email,website,phone,username,id,img}=user;
    return (
        <div className="bg-sky-500 mx-10 my-10 p-10">
            <h1 className=" text-5xl text-white text-center rounded-lg shadow-2xl font-bold">User Details : </h1>
            <div className=" p-10 text-2xl m-5  text-white font-semibold bg-green-400 rounded-lg shadow-xl">
                <img src={img} alt="" />
                <h1 className="text-3xl font-black text-red-500 my-6">Name : {name}</h1>
                <div className="ml-6 text-purple-600">
                    <p className="text-center">ID : {id}</p>
                    <p>Email : {email}</p>
                    <p>Username: {username}</p>
                    <p>Website : {website}</p>
                    <p>Phone : {phone}</p>                   
                    <p>Address:
                        <span> street: {address?.street}</span>
                        <span> city: {address?.city}</span>
                        <span> Zipcode: {address?.zipcode}</span>
                        <p>Geo: lat: {address.geo.lat} lng:{address.geo.lng}</p>
                        <p>Company name : {company.name}</p>
                        <p>Type : {company.bs}</p>                 
                    </p>                 
                   
                </div>
                <div className="text-center my-4">
                <button onClick={handleGoBack} className="bg-orange-500 rounded-lg px-8 py-3">Go Back</button>
                </div>
            </div>
            
        </div>
    );
};

export default Userdetails;