import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./css/create.css";
import axios from "../../Axios";

const Updatebooks = () => {
          
    let location = useLocation();
    let bookId = location.state.id;
  //   console.log(bookId);

    let [state, setState] = useState({
        title: "",
        author: "",
        description: "",
        publishDate: "",
        pages: "",
        cost: ""
      });   
    
      let {
        title,
        author,
        description,
        publishDate,
        pages,
        cost
      } = state;
    
      let handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
      };

      useEffect(() => {
        if (state=="") {
          alert("please update the values")
        }
        let fetchData = async () => {
            let data = await axios.get(`/book-api/findBooks/${bookId}`);
            // console.log(data.data);
            let existingData = data.data;
            setState(existingData);
          };
          fetchData();
      }, [])

      let handleSubmit = async e => {
        e.preventDefault();
        try {
            let data = { title,
                author,
                description,
                publishDate,
                pages,
                cost
             };
          let postData = await axios.put(`/book-api/editBooks/${bookId}`,data)
          .then(res =>{
            if(res.status == 201){
                window.location.assign("/account")
                alert("succeessfully updated")
            }
        }).catch(err => {
            console.log(err);
            alert("not created")
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
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    required
                    value={title}
                    onChange={handleChange}
                  />
                </div>

                 <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    required
                    value={author}
                    onChange={handleChange}
                  />
                </div>
                 <div className="form-group">
                  <label htmlFor="Publish">Publish Date</label>
                  <input
                    type="Date"
                    className="form-control"
                    id="publishDate"
                    required
                    name="publishDate"
                    value={publishDate}
                    onChange={handleChange}
                  />
                </div>
     <div className="form-group">
                  <label htmlFor="pages">Total Pages</label>
                  <input
                    type="number"
                    className="form-control"
                    id="pages"
                    name="pages"
                    required
                    // max="4"
                    value={pages}
                    onChange={handleChange}
                  />
                </div>
     <div className="form-group">
                  <label htmlFor="cost">Book cost</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cost"
                    name="cost"
                    value={cost}
                    required
                    // max="5"
                    // step={0.1} precision={2}
                    onChange={handleChange}
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="description">Book description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group btn-group">
                  <button>Update Books Info</button>
                </div>
              </form>
            </div>
          </article>
          <Link className="btn-5" to="./account"><button className="btn btn-light btn-lg">Go Back</button></Link>
        </section>
      );
    };

export default Updatebooks
