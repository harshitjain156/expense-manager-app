import axios from "axios"
import { TOKEN_NAME, saveToken } from "./configs"
import axiosInstance from "./configs"
import { ToastAndroid } from "react-native"

export const registerUser = async ({
    email, firstName,lastName, password
}: IUser) => {
    console.log("enter",axiosInstance)
    try {
        const response = await axiosInstance.post('/users/v1/register', {
            emailId:email, password:password, firstName:firstName,lastName:lastName
        })
        console.log(response,"API Call",'+++++++++++++++++>')
        return response
    } catch (err:any) {
        console.log(err,"+============")
        ToastAndroid.show(err.response.data.message,ToastAndroid.SHORT)
        throw err
    }
}

export const loginUser = async ({
    email, password
}: Omit<IUser,'firstName' |'lastName'>) => {
    console.log("enter",axiosInstance)
    try {
        const response = await axiosInstance.post('/users/v1/login', {
            emailId:email, password:password
        })
        const token="Bearer "+response.data.accessToken
        axiosInstance.defaults.headers.common["Authorization"]=token
        saveToken(TOKEN_NAME,token)
        return response.data
    } catch (err:any) {
        // console.log(JSON.stringify(err))
        ToastAndroid.show(err.response.data.message,ToastAndroid.SHORT)
        throw err
    }
}