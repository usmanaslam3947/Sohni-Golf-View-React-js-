import axios from "axios";

export async function getAllBills(){
    const result = await axios.post("http://localhost:8081/getBills",{}).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
    return result;
}

export async function createBill(type,amount,date) {
    const result = await axios.post("http://localhost:8081/createBill",{
        "type":type,
        "amount":amount,
        "created_date":date,
        "status":1
    }).then(response=>{
        return response;
    }).catch(error=>{
        return error;
    });
    return result;
}

export async function updateBill(id,type,amount,createdDate,dueDate) {
    const result = await axios.post("http://localhost:8081/updateBill",{
        "id": id,
        "type": type,
        "amount": amount,
        "created_date":createdDate,
        "due_date":dueDate
    }).then(response=>{
        response.data.data.created_date = new Date(response.data.data.created_date);
        response.data.data.due_date = new Date(response.data.data.due_date);
        

        return response;
    }).catch(error=>{
        return error;
    });
    return result;
}

export async function changeBillStatus(id,status){
    const result = await axios.post("http://localhost:8081/changeBillStatus",{
        "id":id,
        "status":status
    }).then(response => {
        return response
    }).catch(error => {
        return error;
    });
    return result;
}

export async function generateBills(billDate) {
    const result = await axios.post('http://localhost:8081/processApartmentBills',billDate).then(
        response =>{
            return response;
    }).catch(error=>{
        return error;
    });
    return result;
}
