import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {UserContext} from '../App';

function PopularProducts() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [instagram,setInstagram]=useState("");
    const [youtube,setYoutube]=useState("");

    const {user,setUser}=useContext(UserContext);

    const run=()=>{
        console.log("1");
        setUser((prevUser) => [
            ...prevUser,
            {
              name: name,
              email: email,
              phone: phone,
              instagram: instagram,
              youtube: youtube
            }
        ]);
        setName("");
        setEmail("")
        setPhone("")
        setInstagram("")
        setYoutube("")
    }


  return (
    <>
        <input type="text" placeholder='Eg. John Doe' onChange={(e)=>{
            setName(e.target.value)
        }} value={name}/>
        <input type="text" placeholder='Eg. John Doe' onChange={(e)=>{
            setEmail(e.target.value);
        }} value={email}/>
        <input type="text" placeholder='Eg. John Doe' onChange={(e)=>{
            setPhone(e.target.value);
        }} value={phone}/>
        <input type="text" placeholder='Eg. John Doe' onChange={(e)=>{
            setInstagram(e.target.value);
        }} value={instagram}/>
        <input type="text" placeholder='Eg. John Doe' onChange={(e)=>{
            setYoutube(e.target.value);
        }} value={youtube}/>

        <button onClick={run}>Done</button>
    </>
  );
}

export default PopularProducts;
