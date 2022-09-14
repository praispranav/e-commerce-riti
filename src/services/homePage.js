import axios from "axios";

axios.defaults.baseURL = "https://4c3b-182-68-217-140.in.ngrok.io"

export const contactInfo = () =>{
    return axios.get('/api/contact/basicInfo')
}

export const getCarousel = () =>{
    return axios.get('/api/carausel')
}
