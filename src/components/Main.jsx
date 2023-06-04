import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const[search,setSearch]=useState("");
    const[bookData,setBookData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key=="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAqTq8SxXDaiwk3hjlPIrtwhepJ80z26L0'+'&maxResults=40')
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return ( 
        <div>
            <div className="header">
            <div className="row1">
                <h1>A room without books is like <br /> a body without a soul.</h1>
            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                <input type="text" placeholder="Enter Your Book Name"
                value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
                <button><i class='bx bxs-search-alt-2'></i></button>
                </div>
                <img src="./images/bg1.png" alt="" />
            </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData}/>
                }
                
            </div>
        </div>
     );
}
 
export default Main;