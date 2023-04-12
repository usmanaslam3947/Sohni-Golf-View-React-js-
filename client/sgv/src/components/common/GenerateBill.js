import './Common.css';
import Setting from '../../assets/settings.png';
import { useState } from 'react';
import axios from 'axios';
import {generateBills} from '../bill/Service';
import Success from './Success';
import Failure from './Failure';
export default function GenerateBill(props) {
    const [billDate,setBillDate] = useState('');
    const [successStatus,setSuccessStatus] = useState(false);
    const [failedStatus,setFailedStatus] = useState(false);
    const processBill = async(e) => {
        e.preventDefault();
        if (billDate === '') {
            alert("Please select date ... ");
            return;
        }
        const res = await generateBills(billDate);
        if (res.data.message.code === 200) {
            setFailedStatus(false);
            setSuccessStatus(true);            
        } else {
            setFailedStatus(true);
            setSuccessStatus(false);
        }
    }
    return(
        <div>
            <form onSubmit={processBill}>
                {successStatus ? <Success/> : null}
                {failedStatus ? <Failure/> : null}
                <input type="date" className="form-control w-50 mt-2" onChange={(e)=>setBillDate(e.target.value)}/>
                <button className="btn btn-success mt-1">Process Bill  <img src={Setting}/></button>
            </form>
        </div>
    )
    
}