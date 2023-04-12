import { useState } from "react";
import Success from "../common/Success";
import Failure from "../common/Failure";
import {createBill} from './Service';
export default function CreateBill(props) {
    const [billName,setBillName] = useState('');
    const [billAmount,setBillAmount] = useState();
    const [billDate,setBillDate] = useState(null);
    const [maxDate,setMaxDate] = useState(getTodayDate());
    const [minDate,setMinDate] = useState(getMinDate());
    const [successStatus,setSuccessStatus] = useState(false);
    const [failureStatus,setFailureStatus] = useState(false);
    const addBill = async(e) => {
        e.preventDefault();
        props.object.setState({loader:true});
        const bills = await createBill(billName,billAmount,billDate);
        props.object.setState({loader:false});
        if (bills.data.message.code ==200) {
            setSuccessStatus(true);
        }else{
            setFailureStatus(true);
        }
    }
    
    
    
    return(
        <div className="create">
            {successStatus ? <Success/> : null}
            {failureStatus ? <Failure/> : null}
            <div className="header">
                <h1>Create Bill</h1>
                {/* <button className="btn btn-secondary mt-1" onClick={()=>props.object.setState({create:false,display:true})}>X</button> */}
            </div>
            <form onSubmit={addBill}>
                <div className="form-group mt-1">
                    <label>Bill Name</label>
                    <input type="text" className="form-control w-75" placeholder="Please Enter Bill Name" value={billName} onChange={(e)=>setBillName(e.target.value)}/>
                </div>
                <div className="form-group mt-1">
                    <label>Amount</label>
                    <input type="number" className="form-control w-75" placeholder="Please Enter Bill Amount" value={billAmount} onChange={(e)=>setBillAmount(e.target.value)}/>
                </div>
                <div className="form-group mt-1">
                    <label>Date</label>
                    <input type="date" min={minDate} max={maxDate} className="form-control w-75" value={billDate} onChange={(e)=>setBillDate(e.target.value)}/>
                </div>
                <button className="btn btn-success mt-1" type="submit" disabled={(billName == "") || (billAmount == 0 || billAmount == "")}>Create Bill</button>
                <button className="btn btn-secondary mt-1" onClick={()=>props.object.setState({create:false,display:true})}>Close</button>
            </form>
        </div>
    )
    
}

function getTodayDate (){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getMinDate() {
    const today = new Date();
    const min = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    const year = min.getFullYear();
    const month = String(min.getMonth() + 1).padStart(2, '0');
    // const day = String(min.getDate()).padStart(2, '0');
    const day = "01";
    return `${year}-${month}-${day}`;
  }