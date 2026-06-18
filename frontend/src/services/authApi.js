import api from "../api/axios";


// Signup API

export const signup = async(data)=>{

    const response =
    await api.post(
        "/auth/signup",
        data
    );

    return response.data;

};



// Login API

export const login = async(data)=>{

    const response =
    await api.post(
        "/auth/login",
        data
    );

    return response.data;

};