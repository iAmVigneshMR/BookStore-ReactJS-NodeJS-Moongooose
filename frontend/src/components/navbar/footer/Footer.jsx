import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    return (
        <Fragment>
            <div id="container">
                <div className="contents">
                    <div className="logo">
                        <h1>Book App</h1>
                        <img src="./logo.png" alt="connect" />
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links : </h3>
                        <ul>
                            <li><Link to="/" className="lnk"><i class="fas fa-arrow-right"></i> Home</Link></li>
                            <li><Link to="/booklist" className="lnk"><i class="fas fa-arrow-right"></i> Booklist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
