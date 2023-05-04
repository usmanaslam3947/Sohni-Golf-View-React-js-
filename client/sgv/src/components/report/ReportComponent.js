import React from 'react';
import { useReactToPrint } from 'react-to-print';
import './ReportComponent.css';
import stampPic from '../../assets/Paid.jpg';

class ReportComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }
    render(){
        return (
        <div>
            {/* {JSON.stringify(this.props.checkedApartment)} */}
            <div className="print-date-time">
                <p>Print Date : {this.state.date.toISOString().replace("T","").replace("Z","").slice(0,10)+' '+this.state.date.getHours()+':'+this.state.date.getMinutes()+':'+this.state.date.getSeconds()+' '+(this.state.date.getHours() >= 12 ? 'PM':'AM')}</p>
                
            </div>
            {this.props.checkedApartment ? this.props.checkedApartment.length > 0 ? this.props.checkedApartment.map(apart => {
                return(
                    <>
                    <div className="report-heading">
                        <h3>Sohni Golf View Apartment</h3>
                        <h4>Bill Report : {apart ?  new Date(apart.bill.created_date).toLocaleString("default",{month:"long"})+" "+new Date(apart.bill.created_date).getFullYear() : null}</h4>
                    </div>
                    <div className="report-container">
                    <div className="report-container-heading">
                        <h4>Bill Details</h4>
                    </div>
                    <div className="report-content-container">
                        <div className="left-report-content">
                            <div>
                                <label>Apartment : </label>
                                <p>{apart.apartment.apartment_name}</p>
                            </div>
                            <div>
                                <label>Bill Id : </label>
                                <p>1</p>
                            </div>
                            <div>
                                <label>Bill Name : </label>
                                <p>{apart.bill.type}</p>
                            </div>
                            <div>
                                <label>Due Date : </label>
                                <p>{new Date(apart.bill.due_date).toLocaleString("default",{month:"long"})+" "+ new Date(apart.bill.due_date).getFullYear()}</p>
                            </div>
                            <div>
                                <label>Units Consumed : </label>
                                <p>10 Ltr</p>
                            </div>
                            <div>
                                <label>Amount Payable : </label>
                                <p>{apart.bill.amount}</p>
                            </div>
                            <div>
                                <label>Late Fees : </label>
                                <p>-</p>
                            </div>
                            <div>
                                <label>Bill Status : </label>
                                <p>{apart.status == 1 ? "Paid" : "Not Paid"}</p>
                            </div>
                        </div>
                        <div className="right-report-content">
                            <div>
                                <label>Payee Name : </label>
                                <p>{apart.payeeName}</p>
                            </div>
                            <div>
                                <label>Payee Cnic : </label>
                                <p>{apart.payeeCnic}</p>
                            </div>
                            <div>
                                <label>Payee Contact Number : </label>
                                <p>{apart.apartment.contact}</p>
                            </div>
                            <div>
                                <label>Cnic Picture : </label>
                                <img src={`data:image/png;base64,${apart.cnicImage}`} alt="No Image Found" />
                            </div>
                            <div className="PaidStampSection">
                                <label>Stamp :</label>
                                {apart.status == 1 ? <img src={stampPic} alt="Paid Stamp Image"/>:"Not Paid"}
                            </div>
                            {/* <div className="PaidStampSection">
                                {apart.status == 1 ? <img src={stampPic} alt="Paid Stamp Image"/>:null}
                            </div> */}
                        </div>
                    </div>

                    <div>
                        <p>--------------------------------------------------------------------------------------------------------------------------</p>
                    </div>
                    {/* <div className="report-content">
                        <div className="report-content-heading">
                            <h4>Date</h4>
                        </div>
                        <div className="report-content-value">
                            <p>Jan 2022</p>
                        </div>
                    </div>
                    <div className="report-content">
                        <div className="report-content-heading">
                            <h4>Payee Name</h4>
                        </div>
                        <div className="report-content-value">
                            <p>Usman Aslam</p>
                        </div>
                    </div>
                    <div className="report-content">
                        <div className="report-content-heading">
                            <h4>Contact Number</h4>
                        </div>
                        <div className="report-content-value">
                            <p>03343586801</p>
                        </div>
                    </div> */}
                </div>
                </>
                )
            }):null:null}
            
        </div>
        );
    }
}

export default ReportComponent;



                    // <div className="report-main-container">
                    //     <div className="report-stamp">

                    //     </div>
                    //     <div className="">

                    //     </div>
                    // </div>





                    {/* 
                     */}