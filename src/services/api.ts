import axios from "axios";

const createApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
    headers: {
        'Accept': 'application/json',
        "Content-type": "application/json"
    }
});

export const apiCallPost = (url:string, data: object) => {
    return createApi.post(url, data).catch(error => console.log(error.response));
}
