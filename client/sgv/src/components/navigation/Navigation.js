import { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Loader from '../common/Loader';
import Logout from '../common/Logout';
import './Navigation.css';
function Navigation() {
  const logo = "sohni golf view".toUpperCase();
  const history = useHistory();
  const [isLogout,setIsLogout] = useState(false);
  const [loader,setLoader] = useState(false);
  const logOut = () => {
    setIsLogout(true);
  }
  const doLogout = (data) => {
    if (data) {
      setLoader(true);
      localStorage.removeItem('token');
      // history.push('/login');
      window.location.reload(true);
      setLoader(false);
    } else {
      setIsLogout(false);
    }
  }
    return(
        // <div>
        //     <NavLink to="/">Home</NavLink>
        //     <NavLink to="/apartments">Apartments</NavLink>
        //     <NavLink to="/login">Logout</NavLink>
        // </div>
        <div>
          
            
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" onClick={()=>{
              history.replace("/");
            }
          }
          >{logo}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">Welcome {localStorage.getItem('token')}</a>
              </li>
              <li className="nav-item active">
              <NavLink to="/"><a className="nav-link" href="#">Home</a></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/apartments"><a className="nav-link" href="#">Apartments</a></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/bills"><a className="nav-link" href="#">Bills</a></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="#"><a className="nav-link" href="#" onClick={logOut}>Logout</a></NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {isLogout ? <Logout onLogout={doLogout}/> : null}
        {loader ? <Loader/> : null}
        </div>
    );
}


export default Navigation;