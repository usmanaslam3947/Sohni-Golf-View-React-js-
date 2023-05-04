import React from 'react';
import axios from 'axios';
import Apartment from './Apartment';
import {useState} from 'react';
import OpenEye from '../../assets/eye.png';
import CloseEye from '../../assets/hide.png';
import './Apartment.css';

function CreateApartment (props){
    const [apartments,setApartments] = useState([]);
    const [apartmentName,setApartmentName] = useState('');
    const [contact,setContact] = useState('');
    const [personName,setPersonName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [passwordEyeIcon,setPasswordEyeIcon] = useState(false);
    const [confirmPasswordEyeIcon,setConfirmPasswordEyeIcon] = useState(false);
    const [maxLength,setMaxLength] = useState(11);

    const createApartment=(e)=>{
        e.preventDefault();
        props.object.showLoader();
        axios.post('http://localhost:8081/createApartment',{
            "apartment_name": apartmentName,
            "contact": contact,
            "status": 1,
            "person_name": personName,
            "password": password
        }).then(response => {
            props.object.hideLoader();
            if (response.data.message.code === 200) {
                props.object.setState({successStatus:true,msg:response.data.message.message,desc:response.data.message.description});                
                props.createdApartment(response.data.data);
            }else{
                props.object.setState({failureStatus:true,msg:response.data.message.message,desc:response.data.message.description});
            }
        }).catch(error => {
            console.log(error);
        });
    }

    // showLoader = () => {
    //     props.object.setState({loader:true});
    // }

    // hideLoader = () => {
    //     props.object.setState({loader:false});
    // }
    
    // render(){

    const handleContactChange = (e) => {
        const value = e.target.value;
            // Remove any non-numeric characters
        const numericValue = value.replace(/[^0-9]/g, '');

        // Limit the length of the numeric value to 11 characters
        const limitedValue = numericValue.slice(0, maxLength);

        // Update the state with the new value
        setContact(limitedValue);
    }
        return(
            <>
                <div id="create">
                    <div className="header">
                        <h1>Create Apartment</h1>
                        {/* <button className="btn btn-secondary mt-1" onClick={()=>props.object.closeCreate(false)}>X</button> */}
                    </div>
                    <form onSubmit={createApartment}>
                        <div className="form-group mt-1">
                            <label>Apartment Name</label>
                            <input type="text" className="form-control w-75" placeholder="Please Enter Apartment Name" value={apartmentName} onChange={(e)=>setApartmentName(e.target.value)} required/>
                        </div>
                        <div className="form-group mt-1">
                            <label>Person Name</label>
                            <input type="text" className="form-control w-75" placeholder="Please Enter Person Name" value={personName} onChange={(e)=>setPersonName(e.target.value)} required/>
                        </div>
                        <div className="form-group mt-1">
                            <label>Contact</label>
                            {/* <input type="phone" maxLength={maxLength} className="form-control w-75" placeholder="Please Enter Contact Number" value={contact} onChange={(e)=>setContact(e.target.value)} required/> */}
                            <input type="tel" maxLength={maxLength} className="form-control w-75" placeholder="Please Enter Contact Number" value={contact} onChange={handleContactChange} required/>
                        </div>
                        <div className="form-group mt-1">
                            <label>Password</label>
                            <div className="passwordField">
                                {passwordEyeIcon ?
                                    <input type="text" className="form-control w-75" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> : 
                                    <input type="password" className="form-control w-75" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>}
                                {passwordEyeIcon ? <img src={OpenEye} onClick={()=>setPasswordEyeIcon(false)}/> : <img src={CloseEye} onClick={()=>setPasswordEyeIcon(true)}/>}
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <label>Confirm Password</label>
                            <div className="passwordField">
                                {confirmPasswordEyeIcon ? 
                                    <input type="text" className="form-control w-75" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/> : 
                                    <input type="password" className="form-control w-75" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>}
                                {confirmPasswordEyeIcon ? <img src={OpenEye} onClick={()=>setConfirmPasswordEyeIcon(false)}/> : <img src={CloseEye} onClick={()=>setConfirmPasswordEyeIcon(true)}/>}
                            </div>
                        </div>
                        <button className="btn btn-success mt-1" type="submit" disabled={(password === "") || (password!=confirmPassword)}>Create Apartment</button>
                        <button className="btn btn-secondary mt-1" onClick={()=>props.object.closeCreate(false)}>Close</button>
                    </form>
                </div>
            </>
        );
    // }
}

export default CreateApartment;