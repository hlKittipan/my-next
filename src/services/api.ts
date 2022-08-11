import axios from "axios";

const createApi = axios.create({
    baseURL: process.env.END_POINT,
    headers: {
        'Accept': 'application/json',
        "Content-type": "application/json"
    }
});

export const apiCallGet = () => {
    return createApi.get('')
}
