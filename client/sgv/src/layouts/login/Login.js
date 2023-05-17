import './Login.css';
import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../common/Loader';
import {useHistory} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [userNameStatus, setUserNameStatus] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const history = useHistory();
    // const navigate = useNavigate();
    // const [inputStatus, setInputStatus] = useState(false);

    const handleUserNameChange = (event) => {
        setUsername(event.target.value)
        if (userName === '' && password === '') {
            // setInputStatus(false);
        }else{
            // setInputStatus(true);
        }
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        if (userName === '' && password === '') {
            // setInputStatus(false);
        }else{
            // setInputStatus(true);
        }
    }



    const getLoginData = (e) => {
        e.preventDefault();
        setIsLogin(true);
        axios.post('http://localhost:8081/login',{user_name:userName,password:password})
        .then(response => {
            if (response.data.data) {
                if (response.data.data.length > 0) {
                    // setIsLogin(false);
                    localStorage.setItem('token',response.data.data[0].name);
                    localStorage.setItem('userId',response.data.data[0].id);
                    window.location.reload(true);
                    // history.push("/"); 
                }else{
                    setIsLogin(false);
                    setUserNameStatus("Wrong User Name ... ");
                    setPasswordStatus("Wrong Password ... ");
                }
            }else{
                setIsLogin(false);
                setUserNameStatus("Wrong User Name ... ");
                setPasswordStatus("Wrong Password ... ");
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <form onSubmit={getLoginData}>
                <div className="form-group">
                    <label>Login ID</label>
                    <input type="input" className="form-control" value={userName} onChange={handleUserNameChange} placeholder="Enter User Name ..." />
                    {isLogin ? null:<label className="statusLabel">{userNameStatus}</label>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={handlePasswordChange} placeholder="Enter User Password ..." />
                    {isLogin ? null:<label className="statusLabel">{passwordStatus}</label>}
                </div>
                {/* {inputStatus ? <button className="enableBtn" onClick={getLoginData}>Login</button>:<button className="disableBtn" onClick={getLoginData}>Login</button>} */}
                <button type="submit">Login</button>
            </form>
            {isLogin ? <Loader/>:null}
        </div>
    );
}



export default (Login);