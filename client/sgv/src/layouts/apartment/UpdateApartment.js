import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import OpenEye from '../../assets/eye.png';
import CloseEye from '../../assets/hide.png';
import './Apartment.css';
function UpdateApartment(props) {
    // const [apartments,setApartments] = useState([]);
    // const [apartmentName,setApartmentName] = useState(props.object.state.);
    // const [contact,setContact] = useState('');
    // const [personName,setPersonName] = useState('');
    // const [password,setPassword] = useState('');
    // const [confirmPassword,setConfirmPassword] = useState('');
    const [passwordEyeIcon,setPasswordEyeIcon] = useState(false);
    const [confirmPasswordEyeIcon,setConfirmPasswordEyeIcon] = useState(false);
    const [maxLength,setMaxLength] = useState(11);

    const updateApartment = (e)=>{
        e.preventDefault();
        props.object.showLoader();
        axios.post('http://localhost:8081/updateApartment',{
            "id": props.object.state.id,
            "apartment_name": props.object.state.apartment_name,
            "contact": props.object.state.contact,
            "status": props.object.state.status,
            "person_name": props.object.state.person_name,
            "password": props.object.state.password
        }).then(response => {
            props.object.hideLoader();
            if (response.data.message.code === 200) {
                props.object.setState(
                    {
                        successStatus:true,
                        msg:response.data.message.message,
                        desc:response.data.message.description,
                        apartments:response.data.data,
                        // update:false,
                        // display:true
                    });
            }else{
                props.object.setState({failureStatus:true,
                    msg:response.data.message.message,
                    desc:response.data.message.description
                });
            }
            // this.hideLoader();
            // this.setState({
            //     apartments:response.data.data,
            //     update:false,
            //     display:true
            // });
        }).catch(error => {
            console.log(error);
        });
    }

    
    const handleContactChange = (e) => {
        const value = e.target.value;
            // Remove any non-numeric characters
        const numericValue = value.replace(/[^0-9]/g, '');

        // Limit the length of the numeric value to 11 characters
        const limitedValue = numericValue.slice(0, maxLength);

        // Update the state with the new value
        props.object.setState({contact:limitedValue});
    }

    return (
        <>
        <div id="update">

            <div className="header">
                <h1>Update Apartment</h1>
                {/* <button className="btn btn-secondary" onClick={()=>props.object.closeUpdate(false)}>X</button> */}
            </div>
            <form onSubmit={updateApartment}>
                <div className="form-group mt-1">
                    <label>Apartment Name</label>
                    <input className="form-control w-75" type="text" placeholder="Please Enter Apartment Name" value={props.object.state.apartment_name} onChange={(e)=>{props.object.setState({apartment_name:e.target.value})}}/>
                </div>
                <div className="form-group mt-1">
                    <label>Contact</label>
                    <input className="form-control w-75" type="text" placeholder="Please Enter Contact Number" value={props.object.state.contact} onChange={handleContactChange}/>
                </div>
                <div className="form-group mt-1">
                    <label>Person Name</label>
                    <input className="form-control w-75" type="text" placeholder="Please Enter Person Name" value={props.object.state.person_name} onChange={(e)=>{props.object.setState({person_name:e.target.value})}}/>
                </div>
                <div className="form-group mt-1">
                    <label>Password</label>
                    <div className="passwordField">
                        {passwordEyeIcon ? 
                            <input className="form-control w-75" type="text" placeholder="Enter password" value={props.object.state.password} onChange={(e)=>{props.object.setState({password:e.target.value})}}/> : 
                            <input className="form-control w-75" type="password" placeholder="Enter password" value={props.object.state.password} onChange={(e)=>{props.object.setState({password:e.target.value})}}/>}
                        {passwordEyeIcon ? <img src={OpenEye} onClick={()=>setPasswordEyeIcon(false)}/> : <img src={CloseEye} onClick={()=>setPasswordEyeIcon(true)}/>}
                    </div>
                </div>
                <div className="form-group mt-1">
                    <label>Confirm Password</label>
                    <div className="passwordField">
                        {confirmPasswordEyeIcon ? 
                            <input className="form-control w-75" type="text" placeholder="Confirm password" value={props.object.state.confirmPassword} onChange={(e)=>{props.object.setState({confirmPassword:e.target.value})}}/> : 
                            <input className="form-control w-75" type="password" placeholder="Confirm password" value={props.object.state.confirmPassword} onChange={(e)=>props.object.setState({confirmPassword:e.target.value})}/>}
                        {confirmPasswordEyeIcon ? <img src={OpenEye} onClick={()=>setConfirmPasswordEyeIcon(false)}/> : <img src={CloseEye} onClick={()=>setConfirmPasswordEyeIcon(true)}/>}
                    </div>
                </div>
                {/* {props.object.state.eyeIcon ? <button onClick={()=>{props.object.setState({eyeIcon:false})}}>hide Pass</button> : <button onClick={()=>{props.object.setState({eyeIcon:true})}}>show Pass</button>}                 */}
                <button type="submit" className="btn btn-success mt-2"  disabled={(props.object.state.password!=props.object.state.confirmPassword)}>Update Apartment</button>
                <button className="btn btn-secondary mt-2" onClick={()=>props.object.setState({successStatus:false,failureStatus:false,update:false,display:true})}>Close</button>
            </form>
                
                {/* {props.object.state.password === props.object.state.confirmPassword  ? <button  onClick={()=>props.object.updateApartment()}>Update Apartment</button>:null} */}
        </div>
        </>
    );
}

export default UpdateApartment;