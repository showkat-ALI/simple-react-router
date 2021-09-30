import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Userdetails = () => {
   const {userId} = useParams()
   const[user,setUser]=useState({})
   const history= useHistory()
   const {name,email,phone,company}=user


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data =>setUser(data))
    },[])
    const handlePrevious= ()=>{
        history.push('/Users')

    }

    return (
        <div>

    <h1>This is from details section for{userId}</h1>
    <h2>{name}</h2>
    <h3>{email}</h3>
    <h4>{phone}</h4>
    <h5>work at:{company?.name}</h5>
    <button onClick={handlePrevious}>Go to the all users</button>

            



        </div>
    );
};

export default Userdetails;