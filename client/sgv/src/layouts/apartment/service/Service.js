import axios from "axios";
export const getAllApartments = async() => {
    const result = await axios.post('http://localhost:8081/getApartments',{}).then(
        response => {
            return response;
    }).catch(error=>{
        return error;
    });
    return result;
}
export const createApartmentService = async(apartmentName,contact,personName,password) => {
    const result = await axios.post('http://localhost:8081/createApartment',{
        "apartment_name": apartmentName,
        "contact": contact,
        "status": 1,
        "person_name": personName,
        "password": password
    }).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
    return result;
}

