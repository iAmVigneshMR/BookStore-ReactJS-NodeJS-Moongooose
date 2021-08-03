import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import "./css/author.css"
import axios from "../../Axios"

const Account = () => {
  const userInfo = localStorage.getItem("userInfo");
  const pat = JSON.parse(userInfo);
  // console.log(pat._id);
  let id = pat._id;
  // console.log(id);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      // users();
      axios.get(`/book-api/usersId/${id}`)
      .then(res => setUserData(res.data))
      .catch(err => console.log('error', err))
  }, []);
  console.log(setUserData);
// const users = async () => {
//     const response = await axios.get("/book-api/getAllBooks")
//     // console.log(response.data);
//     setUserData(response.data);
// };
// console.log(userData)
return (
    <Fragment>
  <div id="App">
    <header className="App-header">
      <h2 className="display-2">All Books Info</h2>
    </header>
    <Link to="./create-book"><button  className="btn btn-info btn-lg">Create Books</button></Link> 
    <Link to="/update-users"><button className="btn btn-warning btn-lg">Update User</button></Link>
    <div className="user-container">
      {/* {console.log(userData)} */}
      {userData && userData.length > 0 ? userData.map((val, i) => 
      <div className="card .mr-3 " style={{"width":"28rem"}}>
      <div  className="card-body">
        <h5 className="card-title">Title : {val.title}</h5>
        <h5 className="card-text">Author : {val.author}</h5>
        <Link to={{pathname:"/view-books", state:{id: val._id}}}><button className="btn btn-info">View Details</button></Link>
        <Link to={{pathname:"/update-book", state:{id: val._id}}}><button className="btn btn-warning">Update Details</button></Link>
        <Link to={{pathname:"/delete-books", state:{id: val._id}}}><button className="btn btn-danger">Delete</button></Link>
      </div>
      </div>
      ) : null
    }
    </div>
  </div>
  </Fragment>
    )
}

export default Account
