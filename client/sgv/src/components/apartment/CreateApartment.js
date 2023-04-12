import React from 'react';
import axios from 'axios';
import Apartment from './Apartment';
import {useState} from 'react';
import OpenEye from '../../assets/eye.png';
import CloseEye from '../../assets/hide.png';
import './Apartment.css';
import Success from '../common/Success';
import Failure from '../common/Failure';

function CreateApartment (props){
    const [apartments,setApartments] = useState([]);
    const [apartmentName,setApartmentName] = useState('');
    const [contact,setContact] = useState('');
    const [personName,setPersonName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [passwordEyeIcon,setPasswordEyeIcon] = useState(false);
    const [confirmPasswordEyeIcon,setConfirmPasswordEyeIcon] = useState(false);
    const [successStatus,setSuccessStatus] = useState(false);
    const [failureStatus,setFailureStatus] = useState(false);
    // constructor(props){
    //     super(props);
        // props.object.state = {loader: false,apartments:[],
        //     apartment_name: "",
        //     contact: "",
        //     status: 0,
        //     person_name: "",
        //     password: "",
        //     eyeIcon:false
        // ,id:0,confirmPassword:""};
    // }

    // setApartmentName = (e) => {
    //     props.object.setState({apartment_name:e.target.value});
    // }
    // setContact = (e) => {
    //     props.object.setState({contact:e.target.value});
    // }
    // setPersonName = (e) => {
    //    props.object.setState({person_name:e.target.value});
    // }
    // setPassword = (e) => {
    //     props.object.setState({password:e.target.value});
    // }
    // setConfirmPassword = (e) => {
    //     props.object.setState({confirmPassword:e.target.value});
    // }

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
            if (response.data.message.code ===200) {
                setSuccessStatus(true);
                props.createdApartment(response.data.data);
            }else{
                setFailureStatus(true);
            }
            // alert(JSON.stringify(response));
            // apartment.setState({apartments:})
            // props.object.setState({apartments:response.data.data});
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
        return(
            <>
                {successStatus ? <Success/>:null}
                {failureStatus ? <Failure/>:null}
                <div id="create">
                    <div className="header">
                        <h1>Create Apartment</h1>
                        {/* <button className="btn btn-secondary mt-1" onClick={()=>props.object.closeCreate(false)}>X</button> */}
                    </div>
                    <form onSubmit={createApartment}>
                        <div className="form-group mt-1">
                            <label>Apartment Name</label>
                            <input type="text" className="form-control w-75" placeholder="Please Enter Apartment Name" value={apartmentName} onChange={(e)=>setApartmentName(e.target.value)}/>
                        </div>
                        <div className="form-group mt-1">
                            <label>Person Name</label>
                            <input type="text" className="form-control w-75" placeholder="Please Enter Person Name" value={personName} onChange={(e)=>setPersonName(e.target.value)}/>
                        </div>
                        <div className="form-group mt-1">
                            <label>Contact</label>
                            <input type="text" className="form-control w-75" placeholder="Please Enter Contact Number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
                        </div>
                        <div className="form-group mt-1">
                            <label>Password</label>
                            <div className="passwordField">
                                {passwordEyeIcon ?
                                    <input type="text" className="form-control w-75" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/> : 
                                    <input type="password" className="form-control w-75" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>}
                                {passwordEyeIcon ? <img src={OpenEye} onClick={()=>setPasswordEyeIcon(false)}/> : <img src={CloseEye} onClick={()=>setPasswordEyeIcon(true)}/>}
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <label>Confirm Password</label>
                            <div className="passwordField">
                                {confirmPasswordEyeIcon ? 
                                    <input type="text" className="form-control w-75" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/> : 
                                    <input type="password" className="form-control w-75" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>}
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