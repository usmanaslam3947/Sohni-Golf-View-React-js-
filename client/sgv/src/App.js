import './App.css';
import React, { useEffect, useState } from 'react';
import Router from './components/router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, useHistory } from 'react-router-dom';
import Login from './components/login/Login';

function App () {
  const [login,setLogin] = useState(false);
  const history = useHistory(); 
  useEffect(()=>{
      if (localStorage.getItem('token')!=null) {
        setLogin(true);
      }else{
        setLogin(false);
        // history.push("/login");
      }
    },[]);
    return(
      <div>
        {login ? <Router/>:<Login />}
        
      </div>
    );  
}

export default App;



// import Navigation from './components/navigation/Navigation';
// import {BrowserRouter,Routes,Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';

/* {code === 200 ? <Home/>:<Login parentCallBack={handleCallBack}/>} */


/* <BrowserRouter>
<Navigation/>
  <Link to="/">Home</Link>
  <Link to="/login">login</Link>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
  </Switch>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
</BrowserRouter> */