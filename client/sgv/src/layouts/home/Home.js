import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import './Home.css';
import apartmentIcon from '../../assets/apartments.png';
import billIcon from '../../assets/bill.png';
import {getAllApartments} from '../apartment/Service';
import {getAllBills} from '../bill/Service';
import Loader from '../common/Loader';
import Success from '../common/Success';
import Failure from '../common/Failure';
class Home extends React.Component{
    // const [apartments,setApartments] = useState();
    // const [bills,setBills] = useState();
    // const [loader,setLoader] = useState(false);
    // const [successStatus,setSuccessStatus] = useState(false);
    // const [failureStatus,setFailureStatus] = useState(false);
    // const [msg,setMsg] = useState("");
    // const [desc,setDesc] = useState("");
    // useEffect(()=>{
    //     getApartments();
    //     getBills();
    // },[]);

    constructor(props){
        super(props);
        this.state = {
            apartments:null,
            bills:null,
            loader:false,
            successStatus:false,
            failureStatus:false,
            msg:"",
            desc:""
        }
        this.getApartments();
        this.getBills();
    }
    getApartments = async() =>{
        this.setState({loader:true});
        const result = await getAllApartments();
        this.setState({loader:false});
        if (result.data.message.code === 200) {
            this.setState({apartments:result.data.data});
        } 
        // else {
        //     this.setState({
        //         msg:result.data.message.message,
        //         desc:result.data.message.description,
        //         failureStatus:true
        //     });
        // }
    }
    getBills = async() =>{
        this.setState({loader:true});
        const result = await getAllBills();
        this.setState({loader:false});
        if (result.data.message.code === 200) {
            this.setState({bills:result.data.data});
        } 
        
        // else {
        //     this.setState({
        //         msg:result.data.message.message,
        //         desc:result.data.message.description,
        //         failureStatus:true
        //     });
        // }
    }
    render(){
        return (
            <div>
                <Navigation/>
                <Success object={this}/>
                <Failure object={this}/>

                <div className="card-container">
                
                    <div className="card w-25">
                        <div className="card-body">
                            <img src={apartmentIcon}/>
                            <div>
                                <p>Count : {this.state.apartments ? this.state.apartments.length:"0"}</p>
                                {this.state.loader ? <Loader/> : null}
                                <h5 className="card-title">Total Apartments</h5>
                            </div>
                        </div>
                    </div>

                    <div className="card w-25">
                        <div className="card-body">
                            <img src={billIcon} alt="No Image"/>
                            <div>
                                <p>Count : {this.state.bills ? this.state.bills.length : "0"}</p>
                                {this.state.loader ? <Loader/> : null}
                                <h5 className="card-title">Total Bills</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;