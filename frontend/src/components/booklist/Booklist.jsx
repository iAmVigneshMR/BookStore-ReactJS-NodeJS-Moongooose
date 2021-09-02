import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../../Axios';
import "./booklist.css"
const Booklist = () => {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm ] = useState("");

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
        <h2 className="display-1">All Books Data</h2>
      </header>
      <hr className="hr" />
            <input
                type="search"
                className="form-control my-2 vw-55"
                style={{fontSize:"2.2rem"}}
                placeholder="search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <hr className="hr" />
      <div className="user-container">
        {/* {console.log(userData)} */}
        {userData && userData.length > 0 ? userData.filter(
          search => {
            if (searchTerm === "") {
              return search;
            } else if(search.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return search;
            }
          }
        )
        .map((val, i) => 
        <div  className="info-item">
          <h5>Title : {val.title}</h5>
          <h5>Author : {val.author}</h5> <br />
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
