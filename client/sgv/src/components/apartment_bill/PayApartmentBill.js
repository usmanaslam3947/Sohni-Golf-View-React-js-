import { useState } from "react"
import {payApartmentBill} from './Service';
export default function PayApartmentBill(props) {
    const [payingAmount,setPayingAmount] = useState();
    const [payeeName,setPayeeName] = useState('');
    const [payeeCnic,setPayeeCnic] = useState('');
    const [base64Image,setBase64Image] = useState('');
    const [systemUser,setSystemUser] = useState(localStorage.getItem('userId'));
    const [billStatus,setBillStatus] = useState(0);
    const payBill = async(e) => {
        e.preventDefault();
        // setBillStatus(1);
        // if (payingAmount == props.object.state.selectedApartmentBill.bill.amount) {
        // }
        if (payeeName == "") {
            props.object.setState({msg:"Please enter payee name ..."});
            props.object.setState({failureStatus:true});
        }else if (payeeCnic == "") {
            props.object.setState({msg:"Please enter payee cnic ..."});
            props.object.setState({failureStatus:true});
        }else if (base64Image == "") {
            const sizeInBytes = (base64Image.length * 6) / 8;
            if (sizeInBytes > 1048576) {
                props.object.setState({msg:"Please select correct image ..."});
                props.object.setState({failureStatus:true});
            }
        }else if (payingAmount == "" || payingAmount != props.object.state.selectedApartmentBill.bill.amount) {
            props.object.setState({msg:"Please enter correct amount to be paid ..."});
            props.object.setState({failureStatus:true});
        }else {
            props.object.state.loader = true;
            try {
                const res = await payApartmentBill(
                    props.object.state.selectedApartmentBill.id,        
                    props.object.state.selectedApartmentBill.apartment.id,
                    props.object.state.selectedApartmentBill.bill.id,
                    1,payingAmount,systemUser,payeeName,payeeCnic,base64Image);
                props.object.state.loader = false;
                if(res.data.message.code===200){
                    props.object.setState({msg:res.data.message.message});
                    props.object.setState({successStatus:true});
                }else{
                    props.object.setState({msg:res.data.message.message});
                    props.object.setState({failureStatus:true});
                }                
            } catch (error) {
                props.object.setState({msg:JSON.stringify(error)});
            props.object.setState({failureStatus:true});
            }

        }

    }
    const amountPaid = (e)=>{
        setPayingAmount(e.target.value);
        if (payingAmount == props.object.state.selectedApartmentBill.bill.amount) {
            setBillStatus(1);
        }
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        if (file && file.size > (1024 * 1024)) {
            alert("File Size greater");
        }else{
            if (file) {            
                reader.readAsBinaryString(file);
                reader.onload = () => {
                    const base64 = btoa(reader.result);
                    setBase64Image(base64);
                };
            }    
        }
        // const reader = new FileReader();
        // if (file) {            
        //     reader.readAsBinaryString(file);
        //     reader.onload = () => {
        //       const base64 = btoa(reader.result);
        //       setBase64Image(base64);
        //     };
        // }
        // reader.onloadend = () => {
        //     // Get the size of the file (in bytes)
        //     const fileSize = file.size;

        //     // Check if the file size is within the allowed limit (in bytes)
        //     const maxSize = 1024 * 1024; // 1 MB
        //     if (fileSize > maxSize) {
        //         alert("File size exceeds the limit of 1 MB.");
        //         document.getElementById('imageId').current.value='';
        //         file = null;
        //         return;
        //     }
        // }
    };
    return(
        <div>
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
                    <input type="number" maxLength={13} className="form-control" placeholder="Please enter payee cnic ..." required onChange={(e)=>setPayeeCnic(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>CNIC Picture</label>
                    <input type="file" id="imageId" className="form-control" accept=".png, .jpeg, .jpg" onChange={handleImageUpload} />
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