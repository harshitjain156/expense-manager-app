import React, { createContext, ReactNode, useContext } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
type UserContextType = {
    context: boolean,
    setContext: React.Dispatch<React.SetStateAction<boolean>>
}

const iUserContextState = {
   context: false,
   setContext: () => {}
}

const GroupContext = createContext<UserContextType>(iUserContextState)

export default GroupContext