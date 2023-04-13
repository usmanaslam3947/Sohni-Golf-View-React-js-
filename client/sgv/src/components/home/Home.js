import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import './Home.css';
import apartmentIcon from '../../assets/apartments.png';
import billIcon from '../../assets/bill.png';
import {getAllApartments} from '../apartment/Service';
import {getAllBills} from '../bill/Service';
import Loader from '../common/Loader';
function Home (){
    const [apartments,setApartments] = useState();
    const [bills,setBills] = useState();
    const [loader,setLoader] = useState(false);
    useEffect(()=>{
        getApartments();
        getBills();
    },[]);
    const getApartments = async() =>{
        setLoader(true);
        const result = await getAllApartments();
        setLoader(false);
        if (result.data.message.code === 200) {
            setApartments(result.data.data);
        } else {
            alert("Unable to fetch apartments");
        }
    }
    const getBills = async() =>{
        setLoader(true);
        const result = await getAllBills();
        setLoader(false);
        if (result.data.message.code === 200) {
            setBills(result.data.data);
        } else {
            alert("Unable to fetch bills");
        }
    }
    return (
        <div>
            <Navigation/>
            <div className="card-container">
            
                <div className="card w-25">
                    <div className="card-body">
                        <img src={apartmentIcon}/>
                        <div>
                            <p>Count : {apartments ? apartments.length:"-"}</p>
                            {loader ? <Loader/> : null}
                            <h5 className="card-title">Total Apartments</h5>
                        </div>
                    </div>
                </div>

                <div className="card w-25">
                    <div className="card-body">
                        <img src={billIcon} alt="No Image"/>
                        <div>
                            <p>Count : {bills ? bills.length : "-"}</p>
                            <h5 className="card-title">Total Bills</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;