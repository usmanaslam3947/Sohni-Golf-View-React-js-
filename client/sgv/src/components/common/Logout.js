import React from 'react';
import './Common.css';
export default function Logout(props) {
    const logout = (data) => {
        props.onLogout(data);
    }
    return (
        <div className="logout">
            <h3>Are you sure to logout ?</h3>
            <button className="btn btn-danger" onClick={()=>logout(true)}>Yes</button>
            <button className="btn btn-secondary" onClick={()=>logout(false)}>No</button>
        </div>
    )
}