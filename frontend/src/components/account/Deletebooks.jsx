import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./css/author.css"
import axios from "../../Axios"

const Deletebooks = () => {
    const [userData, setUserData] = useState("");
    let location = useLocation();
    // console.log(location.state.id)
    let bookId = location.state.id;
    useEffect(() => {
        axios.get(`/book-api/findBooks/${bookId}`)
        .then(res => setUserData(res.data))
        .catch(err => console.log('error', err))
    }, [])

    let deleteBook = async e => {
        await axios.delete(`/book-api/deleteBooks/${bookId}`);
        alert("Post Deleted...");
        window.location.assign('/account');
    }
    return (
        <Fragment>
                <div id="App">
      <header className="App-header">
        <h2>Book Details</h2>
      </header>
      <div className="user-container">
        <div  className="info-item">
          <h5>Title : {userData.title}</h5>
          <h5>Author : {userData.author}</h5>
          <h5>Cost : {userData.cost}</h5>
          <h5>Description : {userData.description}</h5>
          <h5>Pages : {userData.pages}</h5>
          <h5>PublishDate : {userData.publishDate}</h5>
      </div>
    </div>
    <Link to="./account"><button className="btn btn-info btn-lg">Go Back</button></Link>
    <button className="btn btn-danger btn-lg" onClick={deleteBook}>Delete</button>
    </div>
        </Fragment>
    )
}


export default Deletebooks
