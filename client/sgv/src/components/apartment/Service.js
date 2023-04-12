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