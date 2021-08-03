import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../../Axios';
import "./booklist.css"
const Booklist = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // users();
        axios.get("/book-api/getAllBooks")
        .then(res => setUserData(res.data))
        .catch(err => console.log('error', err))
    }, []);

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
        <h2>All Books Data</h2>
      </header>
      <div className="user-container">
        {/* {console.log(userData)} */}
        {userData && userData.length > 0 ? userData.map((val, i) => 
        <div  className="info-item">
          <h5>Title : {val.title}</h5>
          <h5>Author : {val.author}</h5>
          <Link to={{pathname:"/bookDetails", state:{id: val._id}}}>
          <button className="btn btn-info">View Details</button>
          </Link>
        </div>
        ) : null
      }
      </div>
    </div>
    </Fragment>
  );
}

export default Booklist
