import './Common.css';
import {useState,useEffect} from 'react';
export default function Failure(props) {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowComponent(false);
        }, 2500); // hide the component after 5 seconds
        return () => clearTimeout(timeoutId);
    }, []);
    const [showComponent,setShowComponent] = useState(true);
    return(
        <>
            { showComponent ? 
                <div className="failure">
                    Failed ...
                </div> :
                null
            }
        </>
    )
    
}