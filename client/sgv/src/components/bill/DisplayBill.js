import {useState,useEffect} from 'react';
import GenerateBill from '../common/GenerateBill';
import Loader from '../common/Loader';
import './Bill.css';
import {getAllBills,changeBillStatus} from './Service';

export default function DisplayBill(props) {
    useEffect(()=>{
        getBills();
    },[]);
    const [bills,setBills] = useState([]);
    const [tempBills,setTempBills] = useState([]);
    const [noData,setNoData] = useState("No Data Found");
     
    const getBills = async() => {
        props.object.loader = true;
        const bills = await getAllBills();
        props.object.loader = false;
        if (bills.data.message.code === 200) {
            props.object.setState({bills:bills.data.data});
            // setBills(bills.data.data);            
            setTempBills(bills.data.data);            
        }else{
            setNoData("No Data Found");
        }
    }
    const updateBill = (billToUpdate) => {
        // alert(billToUpdate);
        // // props.object.setState({update:true});
        // props.object.setState({bill:billToUpdate,update:true,display:false});
        props.onUpdateBill(billToUpdate);
    }
    const searchBill = (e) => {
        const targetValue = e.target.value;
        // this.setState({id:targetId});
        // const filteredArray = bills.filter(item=> item.id==targetValue || item.type == targetValue || item.type.toLowerCase() == targetValue || item.type.toUpperCase() == targetValue);
        const filteredArray = props.object.state.bills.filter(item=> item.id==targetValue || item.type == targetValue || item.type.toLowerCase() == targetValue || item.type.toUpperCase() == targetValue);
        if(filteredArray.length > 0 && targetValue!=""){
            props.object.setState({bills:filteredArray});
            // setBills(filteredArray);
        }else{
            props.object.setState({bills:tempBills});
            // setBills(tempBills);
        }
    }
    const searchBillByStatus = (e) => {
        const targetValue = e.target.value;
        // this.setState({id:targetId});
        // const filteredArray = bills.filter(item=> item.status==targetValue);
        const filteredArray = props.object.state.bills.filter(item=> item.status==targetValue);
        if(filteredArray.length > 0 && targetValue!=""){
            // setBills(filteredArray);
            props.object.setState({bills:filteredArray});
        }else{
            // setBills(tempBills);
            props.object.setState({bills:tempBills});
        }
    }
    const onChangeBillStatus = async (bill,status) => {
        props.object.setState({loader:true});
        const res = await changeBillStatus(bill.id,status);
        props.object.setState({loader:false});
        if(res.data.message.code === 200){
            setTempBills(res.data.data);
            // setBills(res.data.data);
            props.object.setState({bills:res.data.data});
        }
    }
    return(
        <div>
            <div className="displayBillHeader">
                <div className="generateBill">
                    <GenerateBill tempBills={tempBills}/>
                </div>
                <div className="add-search-container">
                        <div className="add">
                            <button className="btn btn-primary" onClick={()=>{
                                props.object.setState({create:true,display:false,update:false})
                                }}>Add Bill</button>
                        </div>

                        <div className="search">
                            {/* <h1>Get Apartment By ID</h1> */}
                            <input className="form-control mt-1" type="text" placeholder="Search By id/name" onChange={searchBill} />
                            {/* <button className="btn btn-primary mt-2" onClick={() => {this.getApartmentById()}}>Search By Id</button> */}
                            {/* <h1>Get Apartment By Status</h1> */}
                            <input className="form-control mt-1" type="number" placeholder="Search by status ... " onChange={searchBillByStatus}/>
                            {/* <button onClick={() => this.getApartmentByStatus()}>Get Apartment By Status</button> */}
                        </div>
                </div>
            </div>
            {props.object.loader ? <Loader/> : null}
            <h1>All Bills</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Bill Name</th>
                        <th>Amount</th>
                        <th>Date Created</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {((props.object.state.bills.length > 0) && (props.object.state.bills != null)) ? props.object.state.bills.map(bill=>{
                        return (
                            <tr>
                                <td>{bill.id}</td>
                                <td>{bill.type}</td>
                                <td>{bill.amount}</td>
                                <td>{bill.created_date.slice(0,10)}</td>
                                <td>{bill.due_date.slice(0,10)}</td>
                                <td>
                                    <button onClick={()=>updateBill(bill)} className="btn btn-warning">Update</button>
                                    {bill.status === 1 ? <button className="btn btn-danger" onClick={()=>onChangeBillStatus(bill,0)}>Inactive</button> : <button className="btn btn-success" onClick={()=>onChangeBillStatus(bill,1)}>Active</button>}
                                </td>
                            </tr>
                        )
                    }) : <div>{noData}</div>}
                </tbody>
            </table>
        </div>
    )
}

