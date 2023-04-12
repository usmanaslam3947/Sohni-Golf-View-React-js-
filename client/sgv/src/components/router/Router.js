import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Apartment from '../apartment/Apartment';
import Bill from '../bill/Bill';
import Navigation from '../navigation/Navigation';
import { useEffect, useState } from 'react';
import ApartmentBill from '../apartment_bill/ApartmentBill';
function Router(props) {
    // const [loggedIn,setLoggedIn] = useState(false);
    // useEffect(()=>{
    //     if(checkIfUserLoggedIn()){
    //         // props.object.setState({loggedIn:true});
    //         setLoggedIn(true);
    //     }else{
    //         // props.object.setState({loggedIn:false});
    //         setLoggedIn(false);
    //     }
    // },[]);
    
  return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* {loggedIn ? <Home/>:<Redirect to="/login"/>} */}
                   <Home/>
                </Route>
                <Route path="/apartments">
                    {/* {loggedIn ? <Apartment/> : <Redirect to="/login"/>} */}
                    <Apartment/>
                </Route>
                <Route path="/bills">
                {/* {loggedIn ? <Bill/> : <Redirect to="/login"/>} */}
                    <Bill/>
                </Route>
                <Route path="/apartmentBill/:id">
                    <ApartmentBill/>
                </Route>
                <Route path="/login">
                {/* {loggedIn ? <Redirect to="/"/> : <Login/>} */}
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
  );
}

// function checkIfUserLoggedIn() {
//     const token = localStorage.getItem('token');
//     return !!token;
// }

export default Router;
