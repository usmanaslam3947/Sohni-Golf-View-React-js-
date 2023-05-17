import './Common.css';
import {react ,useEffect, useState} from 'react';
export default function Success(props) {
    
    useEffect(() => {
    
        setShowComponent(props.object.state.successStatus);
    
        const timeoutId = setTimeout(() => {
            setShowComponent(false);
            props.object.state.successStatus = false;
        }, 2500); // hide the component after 5 seconds
    
        return () => clearTimeout(timeoutId);
    
    }, [props]);
    
    const [showComponent,setShowComponent] = useState(props.object.state.successStatus);
    
    return(
        <>
            {
                showComponent ?
                    <div className="alert alert-success">
                    
                    <strong>{props.object.state.msg} !</strong> {props.object.state.desc}
                    </div> 
                    // <div className="success">Success</div> 
                    : 
                    null
            }
        </>
    )
}