import React, { Fragment, useEffect, useState } from 'react'
import { Link ,useHistory,withRouter } from 'react-router-dom'
import "./nav.css";

const Navbar = () => {
    const [ showLinks,setShowlinks] = useState(false);
    const history = useHistory();
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        // console.log(userInfo);
        function userLog(){
            if(userInfo)
            {
                // history.push("/");
                window.location.assign("/");
            }
        }
        // setAuthorize(false);
        // window.location.reload();
    },[])

    // const userPush = () => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if(userInfo)
    //         {
    //             window.location.assign("/");
    //         }
    // }

    return (
        <Fragment>
            <div id="nav-container">
                <div className="nav-contents">
                    <div className="left-contents">
                        <Link to="/"><img src="./logo.png" alt="lOGO" /></Link>
                    </div>
                        <button onClick={() => setShowlinks(!showLinks)} className="btn"><i class="fas fa-bars"></i></button>    
                    <div className="right-contents" id={showLinks ? "hidden" : ""}>
                        <ul>
                            <li><Link to="/" className="lnk">home</Link></li>
                            <li><Link to="/booklist" className="lnk">Books</Link></li>
                            
                            {
                                (localStorage.getItem("userInfo")) ? 
                                (<li><Link to="/account" className="lnk">Account</Link><button onClick={()=>{localStorage.removeItem("userInfo"); window.location.assign("/")}} className="btn-2">Logout</button></li>) :
                                (<li><Link to="/login"><button className="btn-2">Login</button></Link></li>) 
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Navbar);
