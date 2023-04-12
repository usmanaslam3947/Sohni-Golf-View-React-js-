import { useState } from "react"
import {payApartmentBill} from './Service';
export default function PayApartmentBill(props) {
    const [payingAmount,setPayingAmount] = useState();
    const [payeeName,setPayeeName] = useState('');
    const [payeeCnic,setPayeeCnic] = useState('');
    const [systemUser,setSystemUser] = useState(localStorage.getItem('userId'));
    const [billStatus,setBillStatus] = useState(0);
    const payBill = async(e) => {
        e.preventDefault();
        // setBillStatus(1);
        // if (payingAmount == props.object.state.selectedApartmentBill.bill.amount) {
        // }
        props.object.state.loader = true;
        const res = await payApartmentBill(
            props.object.state.selectedApartmentBill.id,        
            props.object.state.selectedApartmentBill.apartment.id,
            props.object.state.selectedApartmentBill.bill.id,
            1,payingAmount,systemUser,payeeName,payeeCnic);
        props.object.state.loader = false;
        if(res.data.message.code===200){
            props.object.setState({successStatus:true});
        }else{
            props.object.setState({failureStatus:true});
        }
    }
    const amountPaid = (e)=>{
        setPayingAmount(e.target.value);
        if (payingAmount == props.object.state.selectedApartmentBill.bill.amount) {
            setBillStatus(1);
        }
    }
    return(
        <div>
            <p>Hello World</p>
            <p>Hello World From Usman</p>
            <form onSubmit={payBill}>
                <div className="form-group">
                    <label>Bill Name</label>
                    <p>{props.object.state.selectedApartmentBill.bill.type}</p>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <p>{props.object.state.selectedApartmentBill.bill.amount}</p>
                </div>
                <div className="form-group">
                    <label>Amount Paid</label>
                    <p>{props.object.state.selectedApartmentBill.paidAmount}</p>
                </div>
                <div className="form-group">
                    <label>Payee Name</label>
                    <input type="text" className="form-control" placeholder="Please enter payee name ..." required onChange={(e)=>setPayeeName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Payee CNIC</label>
                    <input type="text" className="form-control" placeholder="Please enter payee cnic ..." required onChange={(e)=>setPayeeCnic(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Paying Amount</label>
                    <input type="number" className="form-control" placeholder="Please enter amount to be paid ..." required onChange={amountPaid}/>
                </div>
                
                <div className="form-group mt-2">
                    <button type="submit" className="btn btn-primary">Pay Bill</button>
                    <button className="btn btn-secondary" onClick={()=>props.object.setState({payBill:false})}>Close</button>
                </div>
            </form>
        </div>
    )
}