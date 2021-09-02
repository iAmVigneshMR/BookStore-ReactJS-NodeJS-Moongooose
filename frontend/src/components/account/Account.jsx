import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/main.css"
import axios from "../../Axios"

const Account = () => {
  const userInfo = localStorage.getItem("userInfo");
  const pat = JSON.parse(userInfo);
  // console.log(pat._id);
  let id = pat._id;
  let email = pat.email;
  // console.log(id);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      axios.get(`/book-api/usersId/${id}`)
      .then(res => setUserData(res.data))
      .catch(err => console.log('error', err))
  }, []);
  console.log(setUserData);
return (
    <Fragment>
    <header id="App-header1">
      <h2 className="display-2">All Books Info</h2>
    </header>
      <div id="App1">
        <div className="container1">
          <h1>{email}</h1>
    <Link to="./create-book" className="nme1">Create Books</Link> <br />
    <Link to="/update-users" className="nme1">Update User</Link>
        </div>
        <div className="container2">
    <div className="user-container1">
      {/* {console.log(userData)} */}
      {userData && userData.length > 0 ? userData.map((val, i) => 
      <div className="card card2">
      <div  className="card-body card-body2">
        <h5 className="card-title">Title : {val.title}</h5>
        <h5 className="card-text">Author : {val.author}</h5>
        <Link to={{pathname:"/view-books", state:{id: val._id}}}><button  title="View Details" className="btn btn-info btn5"><i className="fas fa-eye"></i></button></Link>
        <Link to={{pathname:"/update-book", state:{id: val._id}}}><button title="Update Details" className="btn btn-warning btn5"><i className="fas fa-pen"></i></button></Link>
        <Link to={{pathname:"/delete-books", state:{id: val._id}}}><button title="Deleat Book" className="btn btn-danger btn5"><i className="fas fa-trash" aria-hidden="true"></i></button></Link>
      </div>
      </div>
      ) : null
    }
    </div>
        </div>
      </div>

  </Fragment>
    )
}

export default Account
