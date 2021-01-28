import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import AuthChecker from './components/authChecker';
import HomeLayout from './home-layout';
import Layout from './layout';
import Login from './pages/login';
import AdminLogin from './pages/adminlogin';
import Register from './pages/register';
import Forgetpassword from './pages/forgetpassword';
import Resetpassword from './pages/resetpassword';
import Activate from './pages/activate';
import Video from './pages/video';

import AboutUS from './pages/about';
import Terms from './pages/terms';
import Privacy from './pages/privacy';

import { history } from './utils/history';
import { HomeRoutes } from './routes';
import ScrollRestoration from 'react-scroll-restoration'
import './App.scss';
import { getLogo } from './redux/actions';
import {Helmet} from "react-helmet";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends React.Component {
  componentDidMount =  () =>{
    this.props.getLogo();
    let pathname = window.location.pathname;
    if(pathname==="/aboutus" || pathname==="/terms" || pathname==="/privacy"){
      document.getElementsByClassName("showdow-box")[0].style.marginTop = "10px";
      document.getElementsByClassName("showdow-box")[0].style.marginBottom = "10px";
    
    }
  }
  render() {
    return (
      <Router history={history}>
          <Helmet> 
            <title>ClubAfib</title>
            <meta name="description" content="ClubAfib" /> 
          </Helmet>
          {/* <ScrollToTop /> */}
          <ScrollRestoration />
          <React.Suspense fallback={loading()}>
            <AuthChecker />
            <Switch>
              {HomeRoutes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <HomeLayout><route.component {...props}/></HomeLayout> } />
                ) : (null);
              })}
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
							<Route exact path="/admin-login" name="Admin Login Page" render={props => <AdminLogin {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/forgotpassword" name="Forget Password" render={props => <Forgetpassword {...props}/>} />
              <Route exact path="/resetpassword" name="Reset Password" render={props => <Resetpassword {...props}/>} />
              <Route exact path="/activate" name="Active Password" render={props => <Activate {...props}/>} />
              <Route path="/admin" name="Home" render={props => <Layout {...props}/>} />
              <Route exact path="/video" name="Video" render={props => <Video {...props}/>} />
              
              <Route exact path="/aboutus" name="About" render={props => <AboutUS {...props}/>} />
              <Route exact path="/terms" name="Terms" render={props => <Terms {...props}/>} />
              <Route exact path="/privacy" name="Privacy" render={props => <Privacy {...props}/>} />

              <Redirect to="/" />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.loggedin,
    me: state.auth.me,
  }
}

export default connect(mapStateToProps, { getLogo })(App);