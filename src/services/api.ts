import axios from "axios"
import { TOKEN_NAME, saveToken } from "./configs"
import axiosInstance from "./configs"
// import * as SecureStore from 'expo-secure-store'
// export const TOKEN_NAME="user_token"

type RegisterUserTypes = IUser
// export const BASE_URL='https://blossom-app-back-end.onrender.com/'
const TIME_OUT=30000

// const axiosInstance=axios.create({
//     baseURL:BASE_URL,
//     timeout:TIME_OUT
// })

export const registerUser = async ({
    email, name, password
}: IUser) => {
    console.log("enter",axiosInstance)
    try {
        const response = await axiosInstance.post('/users/create', {
            email:email, password:password, name:name
        })
        console.log("API Call",'+++++++++++++++++>')
        return response.data.user
    } catch (err) {
        console.log(err,"+============")
        throw err
    }
}

export const loginUser = async ({
    email, password
}: Omit<IUser,'name'>) => {
    console.log("enter",axiosInstance)
    try {
        const response = await axiosInstance.post('/users/login', {
            email:email, password:password
        })
        const token=response.data.token
        axiosInstance.defaults.headers.common["Authorization"]=token
        saveToken(TOKEN_NAME,token)
        console.log("API Call",'+++++++++++++++++>')
        return response.data.user
    } catch (err) {
        console.log(err,"+============")
        throw err
    }
}