import './Common.css';
import {react ,useEffect, useState} from 'react';
export default function Success() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowComponent(false);
        }, 2500); // hide the component after 5 seconds
        return () => clearTimeout(timeoutId);
    }, []);
    const [showComponent,setShowComponent] = useState(true);
    return(
        <>
            {showComponent ? <div className="success">Success ...</div> : null}
        </>
    )
}