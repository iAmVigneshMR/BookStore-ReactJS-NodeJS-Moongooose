import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginSvg1 from './LoginSvg1'
import Signupsng from './Signupsng'
import axios from '../../Axios'
import "./login.css"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confirm) {
            alert("password do not match")
        }else{
            try {
                const data = await axios.post("/book-api/signup",
                {username,email,password},
                ).then(res =>{
                    if(res.status == 201){
                        window.location.assign("/")
                        localStorage.setItem("userInfo",JSON.stringify(res.data));
                    }
                }).catch(err => {
                    console.log(err);
                    alert("username and password does not match")
                })
            } catch (error) {
                alert("user already exists")
                if(error) throw error;
                setError(error.res.data.message);
            }
        }
    }

    return (
        <Fragment>
            <div id="log-container">
                <div className="log-contents">
                    <div className="svg-contents">
                        <Signupsng />
                    </div>
                    <div className="form-contents">
                       <div className="frm">
                       <form onSubmit={handleSubmit}>
                            <img src="./svg/avatar2.svg" alt="svg" /><br />
                            <input type="text" placeholder="UserName" value={ username } onChange={ (e) => setUser(e.target.value) } /><br />
                            <input type="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value) } /><br />
                            <input type="Password" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) } /><br />
                            <input type="Password" placeholder="Confirm Password" value={ confirm } onChange={ (e) => setConfirm(e.target.value) } />
                            <p><Link to="./login" className="clr">Already have an Account ? Login</Link></p>
                            <button className="btn-4">SignUp</button>
                        </form>
                       </div>
                    </div>
                </div>
            </div>
            <div className="sec-div">
                <LoginSvg1 />                      
            </div>
        </Fragment>
    )
}

export default Signup
