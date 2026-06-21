import axios from "axios";


const api = axios.create({

    baseURL:"http://10.10.32.64:5000/api",

    headers:{
        "Content-Type":"application/json"
    }

});
 

export default api;