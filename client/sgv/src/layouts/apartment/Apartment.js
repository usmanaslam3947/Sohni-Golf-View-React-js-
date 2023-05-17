import axios from "axios";
import React from "react";
import Loader from '../common/Loader';
import './Apartment.css';
import Navigation from "../navigation/Navigation";
import CreateApartment from './CreateApartment';
import DisplayApartment from './DisplayApartment';
import UpdateApartment from './UpdateApartment';
import Failure from "../common/Failure";
import Success from "../common/Success";
// import 'bootstrap/dist/css/bootstrap.min.css';



class Apartment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loader: false,
            apartments:null,
            tempApartment:[],
            apartmentUpdate:{},
            apartment_name: "",
            contact: "",
            status: 0,
            successStatus:false,
            failureStatus:false,
            msg:"",
            desc:"",
            person_name: "",
            password: "",
            eyeIcon:false,
            create:false,
            update:false,
            display:true,
            id:0,
            confirmPassword:""};
        // this.getAllApartments();
    }
    componentDidMount(){

    }
    setApartmentName = (e) => {
        this.setState({apartment_name:e.target.value});
    }
    setContact = (e) => {
        this.setState({contact:e.target.value});
    }
    setPersonName = (e) => {
        this.setState({person_name:e.target.value});
    }
    setPassword = (e) => {
        this.setState({password:e.target.value});
    }
    setConfirmPassword = (e) => {
        this.setState({confirmPassword:e.target.value});
    }
    // getAllApartments = () => {
    //     this.showLoader();
    //     axios.post('http://localhost:8081/getApartments',{}).then(response => {
    //         this.hideLoader();
    //         this.setState({tempApartment:response.data.data,
    //         apartments:response.data.data});
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    showLoader = () => {
        this.setState({loader:true});
    }

    hideLoader = () => {
        this.setState({loader:false});
    }

    getApartmentById(){
        // this.showLoader();
        // axios.post('http://localhost:8081/getApartmentsById',{
        //     "id": this.state.id
        // }).then(response => {
        //     this.hideLoader();
        //     this.setState({apartments:response.data.data});
        // }).catch(error => {
        //     console.log(error);
        // });
        const filteredArray = this.state.tempApartment.filter(item=>item.id==this.state.id);
        if(filteredArray.length > 0){
            this.setState({apartments:filteredArray});
        }else{
            this.setState({apartments:this.state.tempApartment});
        }
    }

    // createApartment(){
    //     this.showLoader();
    //     axios.post('http://localhost:8081/createApartment',{
    //         "apartment_name": this.state.apartment_name,
    //         "contact": this.state.contact,
    //         "status": 1,
    //         "person_name": this.state.person_name,
    //         "password": this.state.password
    //     }).then(response => {
    //         this.hideLoader();
    //         this.setState({apartments:response.data.data});
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    updateApartment(){
        this.showLoader();
        axios.post('http://localhost:8081/updateApartment',{
            "id": this.state.id,
            "apartment_name": this.state.apartment_name,
            "contact": this.state.contact,
            "status": this.state.status,
            "person_name": this.state.person_name,
            "password": this.state.password
        }).then(response => {
            this.hideLoader();
            this.setState({
                apartments:response.data.data,
                update:false,
                display:true
            });
        }).catch(error => {
            console.log(error);
        });
    }

    // viewApartment(apartment){
    //     alert(apartment.apartment_name);
    // }

    // setId(event){
    //     const targetId = event.target.value;
    //     // this.setState({id:targetId});
    //     const filteredArray = this.state.tempApartment.filter(item=> item.contact==targetId || item.apartment_name == targetId || item.apartment_name.toLowerCase() == targetId || item.apartment_name.toUpperCase() == targetId || item.person_name == targetId);
    //     if(filteredArray.length > 0 && targetId!=""){
    //         this.setState({apartments:filteredArray});
    //     }else{
    //         this.setState({apartments:this.state.tempApartment});
    //     }
    // }

    setApartmentToUpdate(apart){
        this.setState({update:true,display:false});
        this.setState({id:apart.id});
        this.setState({apartment_name:apart.apartment_name});
        this.setState({contact:apart.contact});
        this.setState({person_name:apart.person_name});
        this.setState({status:apart.status});
        this.setState({password:apart.password});
        this.setState({confirmPassword:apart.password});
        // this.setState({apartmentUpdate:apart});
    }
    setCreatedApartment = (data) =>{
        this.setState({apartments:data});
    }
    setUpdatedApartment = (data) =>{
        this.setState({apartments:data});
    }
    // changeApartmentStatus(apart,status){
    //     this.showLoader();
    //     axios.post('http://localhost:8081/changeApartmentStatus',{
    //         "id":apart.id,
    //         "status":status
    //     }).then(response => {
    //         this.hideLoader();
    //         this.setState({apartments:response.data.data});
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    getApartmentByStatus(){
        const filteredArray = this.state.tempApartment.filter(item=>item.status == this.state.status);
        if(filteredArray.length > 0){
            this.setState({apartments:filteredArray});
        }else{
            this.setState({apartments:this.state.tempApartment});
        }
    }

    // setStatus(e){
    //     const targetStatus = e.target.value;
    //     const filteredArray = this.state.tempApartment.filter(item=>item.status == targetStatus);
    //     if(filteredArray.length > 0 && targetStatus!=""){
    //         this.setState({apartments:filteredArray});
    //     }else{
    //         this.setState({apartments:this.state.tempApartment});
    //     }
    // }

    closeCreate(event){
        this.setState({create:event,display:!event});
    }
    closeUpdate(event){
        this.setState({update:event,display:!event});
    }

    render(){
        return (
            <>
                <Navigation/>
                <Success object={this} />
                <Failure object={this}/>

                {this.state.loader ? <Loader/>:null}

                
                




                
                <div className="container">
                    {this.state.create ? <CreateApartment object={this} createdApartment={(data)=>{this.setState({apartments:data})}}/> : null}

                    {this.state.display ? <DisplayApartment object={this}/> : null}
                    
                    {this.state.update ? <UpdateApartment object={this}/> : null}
                </div>
            </>
        );
    }
}

export default Apartment;




/* <h1>All Apartments</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Apartment Name</th>
                        <th>Contact</th>
                        <th>Contact Person Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.apartments != null ? this.state.apartments.length > 0  ? this.state.apartments.map(apart => {
                        if (apart.status === 1) {
                            return (
                                <tr>
                                    <th>{apart.id}</th>
                                    <td>{apart.apartment_name}</td>
                                    <td>{apart.contact}</td>
                                    <td>{apart.person_name}</td>
                                    <td>
                                        <button onClick={() => this.viewApartment(apart)}>View</button>
                                        <button onClick={() => this.setApartmentToUpdate(apart)}>Update</button>
                                        {apart.status === 0 ? <button onClick={() => this.changeApartmentStatus(apart,1)}>Active</button> : <button onClick={() => this.changeApartmentStatus(apart,0)}>Inactive</button>}
                                    </td>
                                </tr>);
                        }else{
                            return (
                                <tr>
                                    <th>{apart.id}</th>
                                    <td>{apart.apartment_name}</td>
                                    <td>{apart.contact}</td>
                                    <td>{apart.person_name}</td>
                                    <td>
                                        <button onClick={() => this.viewApartment(apart)}>View</button>
                                        <button onClick={() => this.setApartmentToUpdate(apart)}>Update</button>
                                        {apart.status === 0 ? <button onClick={() => this.changeApartmentStatus(apart,1)}>Active</button> : <button onClick={() => this.changeApartmentStatus(apart,0)}>Inactive</button>}
                                    </td>
                                </tr>);
                        }
                    }):
                    <tr>
                        <th>{this.state.apartments.id}</th>
                        <th>{this.state.apartments.apartment_name}</th>
                        <td>{this.state.apartments.contact}</td>
                        <td>{this.state.apartments.person_name}</td>
                        <td><button onClick={() => this.viewApartment(this.state.apartments)}>View</button></td>
                    </tr>
                : <p>No apartments found</p>}
                </tbody>
            </table> */






            /* <h1>Create Apartment {this.state.apartment_name}</h1>
            <input type="text" placeholder="Please Enter Apartment Name" value={this.state.apartment_name} onChange={this.setApartmentName}/>
            <input type="text" placeholder="Please Enter Contact Number" value={this.state.contact} onChange={this.setContact}/>
            <input type="text" placeholder="Please Enter Person Name" value={this.state.person_name} onChange={this.setPersonName}/>
            {this.state.eyeIcon ? 
                <input type="text" placeholder="Enter password" value={this.state.password} onChange={this.setPassword}/> : 
                <input type="password" placeholder="Enter password" value={this.state.password} onChange={this.setPassword}/>}
            {this.state.eyeIcon ? 
                <input type="text" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.setConfirmPassword}/> : 
                <input type="password" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.setConfirmPassword}/>}
            {this.state.eyeIcon ? <button onClick={()=>{this.setState({eyeIcon:false})}}>hide Pass</button> : <button onClick={()=>{this.setState({eyeIcon:true})}}>show Pass</button>}

            <button disabled={(this.state.password === "") || (this.state.password!=this.state.confirmPassword)} onClick={()=>this.createApartment()}>Create Apartment</button>
            { this.state.password != '' && this.state.password === this.state.confirmPassword  ? <button onClick={()=>this.createApartment()}>Create Apartment</button>:null} */



            /* <h1>Update Apartment {this.state.apartment_name}</h1>
            <input type="text" placeholder="Please Enter Apartment Name" value={this.state.apartment_name} onChange={this.setApartmentName}/>
            <input type="text" placeholder="Please Enter Contact Number" value={this.state.contact} onChange={this.setContact}/>
            <input type="text" placeholder="Please Enter Person Name" value={this.state.person_name} onChange={this.setPersonName}/>
            {this.state.eyeIcon ? 
                <input type="text" placeholder="Enter password" value={this.state.password} onChange={this.setPassword}/> : 
                <input type="password" placeholder="Enter password" value={this.state.password} onChange={this.setPassword}/>}
            {this.state.eyeIcon ? 
                <input type="text" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.setConfirmPassword}/> : 
                <input type="password" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.setConfirmPassword}/>}
            {this.state.eyeIcon ? <button onClick={()=>{this.setState({eyeIcon:false})}}>hide Pass</button> : <button onClick={()=>{this.setState({eyeIcon:true})}}>show Pass</button>}                
            
            <button  disabled={(this.state.password!=this.state.confirmPassword)} onClick={()=>this.updateApartment()}>Update Apartment</button>
            {this.state.password === this.state.confirmPassword  ? <button  onClick={()=>this.updateApartment()}>Update Apartment</button>:null} */