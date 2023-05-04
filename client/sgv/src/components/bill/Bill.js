import React from 'react';
import Navigation from '../navigation/Navigation';
import DisplayBill from './DisplayBill';
import CreateBill from './CreateBill';
import Loader from '../common/Loader';
import './Bill.css';
import UpdateBill from './UpdateBill';
import GenerateBill from '../common/GenerateBill';
import Success from '../common/Success';
import Failure from '../common/Failure';
class Bill extends React.Component {
    constructor(props){
        super(props);
        this.state={
            bills:[],
            bill:null,
            successStatus:false,
            failureStatus:false,
            msg:"",
            desc:"",
            loader:false,
            create:false,
            display:true,
            update:false
        }
    }
    updateBill = (billToUpdate) => {
        this.setState({bill:billToUpdate,update:true,display:false});
    }
    render(){
        return(
            <div>
                <Navigation/>
                
                <Success object={this}/>
                <Failure object={this}/>

                {this.state.loader ? <Loader/>:null}
                {/* { this.state.display ? :null} */}
                <div className="container">
                   
                    {this.state.create ? <CreateBill object={this}/> : null}
                    {this.state.display ? <DisplayBill object={this} onUpdateBill={this.updateBill}/> : null}
                    {this.state.update ? <UpdateBill object={this} /> : null}
                </div>
                
            </div>
        )
    }

}


export default Bill;