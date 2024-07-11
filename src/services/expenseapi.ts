import { id } from "date-fns/locale"
import axiosInstance from "./configs"

export const getExpenseData = async (url: string, { arg }: { arg: any }) => {
    try {
      
        const res=await axiosInstance.post(url, { ...arg})
        
        return res.data
    } catch (error) {
  
    }
  }
// export const getUserGroups = async (url: string, { arg }: { arg: {id:string} }) => {
//     try {
      
//         const res=await axiosInstance.post(url, { emailId:arg.id})
        
//         return res.data
//     } catch (error) {
  
//     }
//   }