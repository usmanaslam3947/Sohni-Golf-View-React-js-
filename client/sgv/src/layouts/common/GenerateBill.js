import './Common.css';
import Setting from '../../assets/settings.png';
import { useState } from 'react';
import axios from 'axios';
import {generateBills} from '../bill/Service';
import Success from './Success';
import Failure from './Failure';

export default function GenerateBill(props) {
    const [billDate,setBillDate] = useState('');
    
    const processBill = async(e) => {
        e.preventDefault();
        if (billDate === '') {
            // alert("Please select date ... ");
            props.object.setState({failureStatus:true,msg:"Failed",desc:"Please select date."});
            return;
        }
        const res = await generateBills(billDate);
        if (res.data.message.code === 200) {
            props.object.setState({
                successStatus:true,
                msg:res.data.message.message,
                desc:res.data.message.description
            });
        } else {
            props.object.setState({
                failureStatus:true,
                msg:res.data.message.message,
                desc:res.data.message.description
            });
        }
    }
    return(
        <div>
            <form onSubmit={processBill}>
                {/* <Success object={props.object}/>
                <Failure object={props.object}/> */}
                <input type="date" className="form-control w-50 mt-2" onChange={(e)=>setBillDate(e.target.value)}/>
                <button className="btn btn-success mt-1">Process Bill  <img src={Setting}/></button>
            </form>
        </div>
    )
    
}