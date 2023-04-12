import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Loader from '../common/Loader';
import {getApartmentBill} from './Service';
export default function DisplayApartmentBill(props) {
    const {id} = useParams();
    useEffect(()=>{
        getAllApartmentBill();
    },[]);
    const getAllApartmentBill = async() => {
        props.object.setState({loader:true});
        const res = await getApartmentBill();
        props.object.setState({loader:false});
        if (res.data.message.code == 200) {
            const filteredArray = res.data.data.filter(item=>item.apartment.id==id);
            props.object.setState({apartmentBills:filteredArray});            
        }
    }

    return(
        <div>
            {props.object.state.loader ? <Loader/> : null}
            <h1>{props.object.state.apartmentBills.length > 0 ? props.object.state.apartmentBills[0].apartment.apartment_name:"No Bills"} </h1>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>Apartment Name</th> */}
                        <th>Bill Name</th>
                        <th>Created Date</th>
                        <th>Due Date</th>
                        <th>Amount</th>
                        <th>Amount Paid</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    { props.object.state.apartmentBills!=null && props.object.state.apartmentBills.length > 0 ? props.object.state.apartmentBills.map(apartmentBill => {
                        return(
                            <tr>
                                {/* <td>{apartmentBill.apartment.apartment_name}</td> */}
                                <td>{apartmentBill.bill.type}</td>
                                <td>{apartmentBill.bill.created_date.slice(0,10)}</td>
                                <td>{apartmentBill.bill.due_date.slice(0,10)}</td>
                                <td>{apartmentBill.bill.amount}</td>
                                <td>{apartmentBill.paidAmount}</td>
                                <td>
                                    {apartmentBill.status == 1 ? <p style={{color:'green'}}>Paid</p>:<button className="btn btn-success" onClick={()=>{
                                        props.object.setState({selectedApartmentBill:apartmentBill})
                                        props.object.setState({payBill : true})
                                    }}>Pay Now</button>}
                                </td>
                            </tr>
                        )
                    }):<p>No Data Found</p>}
                    
                </tbody>
            </table>
        </div>
    )
}