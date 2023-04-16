import React, { useState } from 'react';
import ReportComponent from './ReportComponent';
import { useReactToPrint } from 'react-to-print';
import Printer from '../../assets/printer.png';

function PrintButton (props){
    const componentRef = React.useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

  return (
    <div>
      {/* {JSON.stringify(props.checkedApartment)} */}
        <img className="mt-2" src={Printer} alt="Printer" onClick={handlePrint}/>
      {/* <button className="btn btn-success mt-2" onClick={handlePrint}>Print Report</button> */}
      <div style={{ display: 'none' }}>
        <ReportComponent checkedApartment={props.checkedApartment} ref={componentRef} />
      </div>
    </div>
  );
};

export default PrintButton;
