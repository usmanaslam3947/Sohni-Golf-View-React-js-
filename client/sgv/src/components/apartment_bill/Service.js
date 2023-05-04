import axios from 'axios';
export async function getApartmentBill() {
    const result = await axios.post('http://localhost:8081/getAllApartBill',{}).
    then(response => {
        return response;
    }).catch(error => {
        return error;
    });
    return result;
}

export async function payApartmentBill(id,apartId,billId,status,amountPaid,user,payeeName,payeeCnic,base64Image,amount) {
    const result = await axios.post('http://localhost:8081/payApartmentBill',{
        "id":id,
        "apartmentId":apartId,
        "billId":billId,
        "status":status,
        "paidAmount":amountPaid,
        "systemUser":user,
        "payeeName":payeeName,
        "payeeCnic":payeeCnic,
        "cnicImage":base64Image,
        "amount":amount
    }).then(response=>{
        return response;
    }).catch(error=>{
        return error;
    });
    return result;
}