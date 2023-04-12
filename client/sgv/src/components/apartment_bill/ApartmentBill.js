import React from 'react';
import Navigation from '../navigation/Navigation';
import DisplayApartmentBill from './DisplayApartmentBill';
import './ApartmentBill.css';
import PayApartmentBill from './PayApartmentBill';
import Loader from '../common/Loader';
import Success from '../common/Success';
import Failure from '../common/Failure';
class ApartmentBill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apartmentBills :[],
            selectedApartmentBill:null,
            loader:false,
            payBill:false,
            displayBill:false,
            successStatus:false,
            failureStatus:false
        }
        // this.getAllApartmentBill();
    }
    getAllApartmentBill(){
        alert("Getting all bills");
    }

    showId(){

    }
    render(){
        return(
            <div>
                <Navigation/>
                {this.state.loader ? <Loader/>:null}
                {this.state.successStatus ? <Success/>:null}
                {this.state.failureStatus ? <Failure/>:null}
                <div className="container">
                    {
                        this.state.payBill ? 
                        <PayApartmentBill object={this}/> 
                        : 
                        <DisplayApartmentBill object={this}/>
                    }
                </div>
                
            </div>
        )
    }
}

export default ApartmentBill;