import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./css/create.css";
import axios from "../../Axios";

const Updateusers = () => {
           
  const userInfo = localStorage.getItem("userInfo");
  const pat = JSON.parse(userInfo);
  // console.log(pat._id);
  let id = pat._id;
  // console.log(id);

  let [state, setState] = useState({
      username: "",
      email: "",
    });   
  
    let {
      username,
      email,
    } = state;
  
    let handleChange = e => {
      setState({ ...state, [e.target.name]: e.target.value });
    };

    useEffect(() => {
      let fetchData = async () => {
          let data = await axios.get(`/book-api/findUsers/${id}`);
          // console.log(data.data);
          let existingData = data.data;
          setState(existingData);
        };
        fetchData();
    }, [])

    let handleSubmit = async e => {
      e.preventDefault();
      try {
          let data = { username,
              email,
           };
        let postData = await axios.put(`/book-api/updateUser/${id}`,data)
        .then(res =>{
          if(res.status == 201){
              window.location.assign("/account")
              alert("succeessfully updated")
          }
      }).catch(err => {
          console.log(err);
          alert("user already exists")
      })
        window.Location.assign("/account");
        let existingdata = postData.data;
        setState(existingdata);
        console.log(existingdata);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <section id="MovieBlock">
        <article>
          <div>
            <h1>Update Books Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={handleChange}
                />
              </div>

               <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group btn-group">
                <button>Update Books Info</button>
              </div>
            </form>
          </div>
        </article>
        <Link className="btn-8" to="./account"><button className="btn btn-light btn-lg">Go Back</button></Link>
      </section>
    );
  };

export default Updateusers
