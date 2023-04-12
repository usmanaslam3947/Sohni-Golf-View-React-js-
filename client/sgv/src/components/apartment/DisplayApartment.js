import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Apartment.css';
function DisplayApartment(props) {
    const history = useHistory();
    return (
        <>
            <div id="display">

            <h1>All Apartments</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Apartment Name</th>
                            <th>Contact</th>
                            <th>Contact Person Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.object.state.apartments != null ? props.object.state.apartments.length > 0  ? props.object.state.apartments.map(apart => {
                            if (apart.status === 1) {
                                return (
                                    <tr>
                                        <th>{apart.id}</th>
                                        <td>{apart.apartment_name}</td>
                                        <td>{apart.contact}</td>
                                        <td>{apart.person_name}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => history.push('/apartmentBill/'+apart.id)}>View</button>
                                            <button className="btn btn-warning" style={{marginLeft:'10px'}} onClick={() => props.object.setApartmentToUpdate(apart)}>Update</button>
                                            {apart.status === 0 ? <button className="btn btn-success" onClick={() => props.object.changeApartmentStatus(apart,1)}>Active</button> : <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={() => props.object.changeApartmentStatus(apart,0)}>Inactive</button>}
                                        </td>
                                    </tr>);
                            }else{
                                return (
                                    <tr>
                                        <th>{apart.id}</th>
                                        <td>{apart.apartment_name}</td>
                                        <td>{apart.contact}</td>
                                        <td>{apart.person_name}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => window.location.replace('/apartmentBill')}>View</button>
                                            <button className="btn btn-warning" style={{marginLeft:'10px'}} onClick={() => props.object.setApartmentToUpdate(apart)}>Update</button>
                                            {apart.status === 0 ? <button className="btn btn-success" style={{marginLeft:'10px'}} onClick={() => props.object.changeApartmentStatus(apart,1)}>Active</button> : <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={() => props.object.changeApartmentStatus(apart,0)}>Inactive</button>}
                                        </td>
                                    </tr>);
                            }
                        }):
                        <tr>
                            <th>{props.object.state.apartments.id}</th>
                            <th>{props.object.state.apartments.apartment_name}</th>
                            <td>{props.object.state.apartments.contact}</td>
                            <td>{props.object.state.apartments.person_name}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => window.location.replace('/apartmentBill')}>View</button>
                                <button className="btn btn-warning" style={{marginLeft:'10px'}} onClick={() => props.object.setApartmentToUpdate(props.object.state.apartments)}>Update</button>
                                {props.object.state.apartments.status === 0 ? <button className="btn btn-success" style={{marginLeft:'10px'}} onClick={() => props.object.changeApartmentStatus(props.object.state.apartments,1)}>Active</button> : <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={() => props.object.changeApartmentStatus(props.object.state.apartments,0)}>Inactive</button>}
                            </td>
                        </tr>
                    : <p>No apartments found</p>}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DisplayApartment;