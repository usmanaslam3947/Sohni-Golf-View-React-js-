import { useEffect, useState } from "react";
import {updateBill} from './Service';

export default function UpdateBill(props) {
    const [billId,setBillId] = useState(props.object.state.bill.id);
    const [billName,setBillName] = useState(props.object.state.bill.billType.type);
    const [billTypeId,setBillTypeId] = useState(props.object.state.bill.billType.id);
    const [billAmount,setBillAmount] = useState(props.object.state.bill.amount);
    const [billDueDate,setBillDueDate] = useState(props.object.state.bill.due_date);
    const [billCreatedDate,setBillCreatedDate] = useState(props.object.state.bill.created_date);
    const [maxDate,setMaxDate] = useState(getTodayDate());
    const [minDate,setMinDate] = useState(getMinDate());
    const [defaultDueDate,setDefaultDueDate] = useState(new Date(billDueDate).toISOString().split('T')[0]);
    const [defaultCreatedDate,setDefaultCreatedDate] = useState(new Date(billCreatedDate).toISOString().split('T')[0]);

    // useEffect(() => {
    //     if (successStatus) {
    //         const timeoutId = setTimeout(() => {
    //             setSuccessStatus(false);
    //         }, 5000); // hide the component after 5 seconds    
    //         return () => clearTimeout(timeoutId);
    //     }else if (failureStatus) {
    //         const timeoutId = setTimeout(() => {
    //             setFailureStatus(false);
    //         }, 5000); // hide the component after 5 seconds
    //         return () => clearTimeout(timeoutId);
    //     }
    // }, []);


    const billToUpdate = async(e) => {
        e.preventDefault();
        props.object.setState({loader:true});
        // const bills = await updateBill(billName,billAmount,billDate);
        const response = await updateBill(billId,billTypeId,billAmount,billCreatedDate,billDueDate);
        props.object.setState({loader:false});
        if (response.data.message.code ==200) {
            props.object.setState({bills:response.data.data});
            props.object.state.successStatus = true;
            props.object.state.msg = response.data.message.message;
            props.object.state.desc = response.data.message.description;
        }else{
            props.object.state.failureStatus = true;
            props.object.state.msg = response.data.message.message;
            props.object.state.desc = response.data.message.description;
        }
    }
    
    
    
    return(
        <div className="create">
            <div className="header">
                <h1>Update Bill</h1>
                {/* <button className="btn btn-secondary mt-1" onClick={()=>props.object.setState({create:false,display:true})}>X</button> */}
            </div>
            <form onSubmit={billToUpdate}>
                <div className="form-group mt-1">
                    <label>Bill Name</label>
                    {/* <input type="text" className="form-control w-75" placeholder="Please Enter Bill Name" value={billName} onChange={(e)=>setBillName(e.target.value)}/> */}
                    <p>{billName}</p>
                </div>
                <div className="form-group mt-1">
                    <label>Amount</label>
                    <input type="number" className="form-control w-75" placeholder="Please Enter Bill Amount" value={billAmount} onChange={(e)=>setBillAmount(e.target.value)}/>
                </div>
                <div className="form-group mt-1">
                    <label>Created Date</label>
                    <input type="date" min={minDate} max={maxDate} className="form-control w-75" defaultValue={defaultCreatedDate} onChange={(e)=>setBillCreatedDate(e.target.value)}/>
                </div>
                <div className="form-group mt-1">
                    <label>Due Date</label>
                    <input type="date" min={minDate} className="form-control w-75" defaultValue={defaultDueDate} onChange={(e)=>setBillDueDate(e.target.value)}/>
                </div>
                <button className="btn btn-success mt-1" type="submit" disabled={(billName == "") || (billAmount == 0 || billAmount == "")}>Update Bill</button>
                <button className="btn btn-secondary mt-1" onClick={()=>props.object.setState({update:false,display:true,successStatus:false,failureStatus:false})}>Close</button>
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