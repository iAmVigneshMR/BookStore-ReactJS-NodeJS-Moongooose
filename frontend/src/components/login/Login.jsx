import React, { Fragment, useEffect, useState } from 'react'
import LoginSvg1 from './LoginSvg1'
import "./login.css"
import Loginsvg2 from './Loginsvg2'
import { Link ,useHistory, withRouter} from 'react-router-dom'
import axios from "../../Axios";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    // const history = useHistory();

    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     // console.log(userInfo);
    //     if(userInfo)
    //     {
    //         console.log(userInfo);
    //         history.push("/");
    //     }
    // },[])
    // const userPush = () => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     console.log(userInfo);
    //     if(userInfo)
    //     console.log(userInfo);
    //         {
    //             window.location.assign("/");
    //         }
    // }
    const handleSubmmit = async e => {
        e.preventDefault();
        // console.log(userName,password);
        try {
            await axios.post("/book-api/login",
            {email,password},
            ).then(res =>{
                if(res.status === 200){
                    window.location.assign("/")
                    localStorage.setItem("userInfo",JSON.stringify(res.data));
                }
            }).catch(err => {
                console.log(err);
                alert("username and password does not match")
            })
        } catch (error) {
            if(error) throw error;
            setError(error.res.data.message);
        }
    }
    return (
        <Fragment>
            <div id="log-container">
                <div className="log-contents">
                    <div className="svg-contents">
                        <Loginsvg2 />
                    </div>
                    <div className="form-contents">
                       <div className="frm">
                       <form onSubmit={ handleSubmmit }>
                            <img src="./svg/avatar.svg" alt="svg" /><br />
                            <input type="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value) } /><br />
                            <input type="Password" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
                            <p><Link to="./signup" className="clr">Don't have an Account ? SignUp</Link></p>
                            <button className="btn-4">Login</button>
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

export default withRouter(Login);
