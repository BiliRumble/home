import axios from "axios";
const config = {
    timeout: 10000,
    timeoutErrorMessage: 'Timeout! Please check your network connection.'
};

export async function get(uri: string) {
    return await axios.get(uri, config);
}

export async function post(uri: string, data: any) {
    return await axios.post(uri, data, config);
}

export async function put(uri: string, data: any) {
    return await axios.put(uri, data, config);
}

export async function del(uri: string) {
    return await axios.delete(uri, config);
}

export function raxios(uri: string) {
    return axios;
}