export default function SearchAndAdd(props) {
    return(
        <div className="add-search-container">
            <div className="add">
                <button className="btn btn-primary" >Add Bill</button>
            </div>

            <div className="search">
                {/* <h1>Get Apartment By ID</h1> */}
                <input className="form-control mt-1" type="text" placeholder="Enter Bill ID" />
                {/* <button className="btn btn-primary mt-2" onClick={() => {this.getApartmentById()}}>Search By Id</button> */}
                {/* <h1>Get Apartment By Status</h1> */}
                <input className="form-control mt-1" type="number" placeholder="Please Enter status ... "/>
                {/* <button onClick={() => this.getApartmentByStatus()}>Get Apartment By Status</button> */}
            </div>
        </div>
    )
}