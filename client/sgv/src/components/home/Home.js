import React from 'react';
import Navigation from '../navigation/Navigation';
import Apartment from '../apartment/Apartment';
class Home extends React.Component {
    
    render(){
        return (
            <div>
                <Navigation/>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;