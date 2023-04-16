import React from 'react';
import { useReactToPrint } from 'react-to-print';
import './ReportComponent.css';

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
            <div className="report-heading">
                <h3>Sohni Golf View Apartment</h3>
                <h4>Bill Report :</h4>
            </div>
            <div className="report-container">
                <div className="report-content">
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
                </div>
            </div>
        </div>
        );
    }
}

export default ReportComponent;
