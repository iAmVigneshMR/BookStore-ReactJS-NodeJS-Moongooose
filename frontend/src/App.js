import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './components/account/Account';
import Createbooks from './components/account/Createbooks';
import Deletebooks from './components/account/Deletebooks';
import Updatebooks from './components/account/Updatebooks';
import Updateusers from './components/account/Updateusers';
import Viewbooks from './components/account/Viewbooks';
import BookDetails from './components/booklist/BookDetails';
import Booklist from './components/booklist/Booklist';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Footer from './components/navbar/footer/Footer';
import Navbar from './components/navbar/nav/Navbar';
import PageNotFound from './pages/404';
import Home from './pages/Home';

const App = () => {
    return (
        <Fragment>
            <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route> 
                <Route path="/signup" exact>
                    <Signup />
                </Route>  
                <Route path="/booklist" exact>
                    <Booklist />
                </Route> 
                <Route path="/account" exact>
                    <Account />
                </Route>  
                <Route path="/view-books" exact>
                    <Viewbooks />
                </Route>  
                <Route path="/create-book" exact>
                    <Createbooks />
                </Route>  
                <Route path="/update-book" exact>
                    <Updatebooks />
                </Route>  
                <Route path="/account" exact>
                    <Account />
                </Route>  
                <Route path="/delete-books" exact>
                    <Deletebooks />
                </Route>  
                <Route path="/update-users" exact>
                    <Updateusers />
                </Route> 
                <Route path="/bookDetails" exact>
                    <BookDetails />
                </Route> 
                <Route path="*" exact>
                    <PageNotFound />
                </Route>
            </Switch>
            <Footer />
            </Router>
        </Fragment>
    )
}

export default App
