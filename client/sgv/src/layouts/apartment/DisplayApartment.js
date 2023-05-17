import React, { useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Apartment.css';

function DisplayApartment(props) {

    useEffect(()=>{
        getAllApartments();
    },[]);


    const history = useHistory();

    const getAllApartments = () => {
        props.object.showLoader();
        axios.post('http://localhost:8081/getApartments',{}).then(response => {
            props.object.hideLoader();
            props.object.setState({tempApartment:response.data.data,
            apartments:response.data.data});
        }).catch(error => {
            console.log(error);
        });
    }


    const changeApartmentStatus = (apart,status) => {
        props.object.showLoader();
        axios.post('http://localhost:8081/changeApartmentStatus',{
            "id":apart.id,
            "status":status
        }).then(response => {
            props.object.hideLoader();
            props.object.setState({apartments:response.data.data,
                tempApartment:response.data.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    const setId = (event) => {
        const targetId = event.target.value;
        const filteredArray = props.object.state.tempApartment.filter(item=> item.contact==targetId || item.apartment_name == targetId || item.apartment_name.toLowerCase() == targetId || item.apartment_name.toUpperCase() == targetId || item.person_name == targetId);
        if(filteredArray.length > 0 && targetId!=""){
            props.object.setState({apartments:filteredArray});
        }else{
            props.object.setState({apartments:props.object.state.tempApartment});
        }
    }

    const setStatus = (e) => {
        const targetStatus = e.target.value;
        const filteredArray = props.object.state.tempApartment.filter(item=>item.status == targetStatus);
        if(filteredArray.length > 0 && targetStatus!=""){
            props.object.setState({apartments:filteredArray});
            // props.object.setState({failureStatus:true,msg:"No Data Found !!!"});
        }else{
            props.object.setState({apartments:props.object.state.tempApartment});
            // props.object.setState({failureStatus:true,msg:"No Data Found !!!"});
        }
    }

    return (
        <>
            <div id="display">

            <div className="add-search-container">
                <div className="add">
                    <button className="btn btn-primary" onClick={()=>{
                        props.object.setState({create:true,display:false,update:false})
                        }}>Add Apartment</button>
                </div>

                <div className="search">
                    {/* <h1>Get Apartment By ID</h1> */}
                    <input className="form-control mt-1" type="text" placeholder="Enter Apartment ID" onChange={setId} />
                    {/* <button className="btn btn-primary mt-2" onClick={() => {this.getApartmentById()}}>Search By Id</button> */}
                    {/* <h1>Get Apartment By Status</h1> */}
                    <input className="form-control mt-1" type="number" placeholder="Please Enter status ... " onChange={setStatus}/>
                    {/* <button onClick={() => this.getApartmentByStatus()}>Get Apartment By Status</button> */}
                </div>
            </div>

            <h1>All Apartments</h1>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Apartment Name</th>
                            <th>Contact</th>
                            <th>Contact Person Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.object.state.apartments != null && props.object.state.apartments.length > 0  ? props.object.state.apartments.map(apart => {
                            
                            return (
                                <tr>
                                    {/* <th>{apart.id}</th> */}
                                    <td>{apart.apartment_name}</td>
                                    <td>{apart.contact}</td>
                                    <td>{apart.person_name}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => history.push('/apartmentBill/'+apart.id)}>View</button>
                                        <button className="btn btn-warning" style={{marginLeft:'10px'}} onClick={() => props.object.setApartmentToUpdate(apart)}>Update</button>
                                        {apart.status === 0 ? <button className="btn btn-success" onClick={() => changeApartmentStatus(apart,1)}>Active</button> : <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={() => changeApartmentStatus(apart,0)}>Inactive</button>}
                                    </td>
                                </tr>);
                            }) :
                        "No Apartment Found"}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DisplayApartment;