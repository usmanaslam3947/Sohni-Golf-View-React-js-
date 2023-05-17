import './Common.css';
import {useState,useEffect} from 'react';
export default function Failure(props) {

    useEffect(() => {
        setShowComponent(props.object.state.failureStatus);
        const timeoutId = setTimeout(() => {
            setShowComponent(false);
            props.object.state.failureStatus = false;
        }, 2500); // hide the component after 5 seconds
        return () => clearTimeout(timeoutId);
    }, [props]);

    const [showComponent,setShowComponent] = useState(props.object.state.failureStatus);

    return(
        <>
            { showComponent ? 
                <div className="alert alert-danger">
                    
                    <strong>{props.object.state.msg} !</strong> {props.object.state.desc}
                </div> :
                null
            }
        </>
    )
    
}