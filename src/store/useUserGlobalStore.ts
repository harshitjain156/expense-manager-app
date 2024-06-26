import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IUserGlobalStor{
    user:IUser | null
    updateUser:(user:IUser | null)=>void

}

const useUserGlobalStore=create<IUserGlobalStor>()(
    persist((set,get)=>({
        user:null,
        updateUser:(user)=> {
            set({user})
        }
    }),
    {
        name:"user-storage",
        storage:createJSONStorage(()=>AsyncStorage)
    }

)
)

export default useUserGlobalStore