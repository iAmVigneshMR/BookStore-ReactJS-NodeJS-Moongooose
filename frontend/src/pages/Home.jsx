import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./pages.css"

const Home = (props) => {
    return(
        <Fragment>
            <div id="hom-container">
                <div className="hom-contents">
                    <img src="./home.jpg" alt="home image" />
                    <div className="img-contents">
                        <h1>Discover your next great book!</h1>
                        {
                            (localStorage.getItem("userInfo")) ? 
                            (<li><Link to="/account"><button className="lnk">Account</button></Link><button onClick={()=>{localStorage.removeItem("userInfo"); window.location.assign("/")}} className="btn-2">Logout</button></li>) :
                            (<li><Link to="/login"><button className="btn-2">Login</button></Link></li>) 
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
