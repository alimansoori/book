import axios from "axios";
// import {api, wooPath} from "../urlConfig";

// const token = window.localStorage.getItem('token');

// const axiosInstance = axios.create({
//     baseURL: api+wooPath,
//     // params: {
//     //     consumer_key: "ck_68b6d6610ba718c2ee8f5edae774684f2592b0d8",
//     //     consumer_secret: "cs_d010b9e04902963347b208e088cb2d53a5c69407"
//     // },
//     // headers: {
//     //     'Authorization': token ? `Bearer ${token}`: ``
//     // }
//     auth: {
//         username: "ck_27429bbd26a668d4620cabfa137d80db79e8d8ed",
//         password: "cs_c1bb3be2a6328537183775cfd4e183a715efae44"
//     }
// });
//
// export const axiosCustomRoute = axios.create({
//     baseURL: api+'/wp-json',
//     // params: {
//     //     consumer_key: "ck_68b6d6610ba718c2ee8f5edae774684f2592b0d8",
//     //     consumer_secret: "cs_d010b9e04902963347b208e088cb2d53a5c69407"
//     // },
//     // headers: {
//     //     'Authorization': token ? `Bearer ${token}`: ``
//     // }
//     auth: {
//         username: "ck_27429bbd26a668d4620cabfa137d80db79e8d8ed",
//         password: "cs_c1bb3be2a6328537183775cfd4e183a715efae44"
//     }
// });

export const axiosGoogleSuggest = axios.create({
    baseURL: 'http://suggestqueries.google.com/complete',
    headers: {
        "Content-Type": "application/xml; charset=utf-8"
    }
});

export default axiosGoogleSuggest;