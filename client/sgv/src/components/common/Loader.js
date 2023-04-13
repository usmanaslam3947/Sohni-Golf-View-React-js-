import React from 'react';
import './Loader.css';
class Loader extends React.Component{
    showLoader = () => {
        alert("Showing Loader ...")
    }
    render(){
        return(
            <div className="loader">
                {/* <p>
                Loading ...
                </p> */}
            </div>
        )
    }
}

export default Loader;