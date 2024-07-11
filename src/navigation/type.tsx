import { DrawerNavigationProp } from "@react-navigation/drawer"
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type AuthStackParamList={
    Welcome:undefined
    SignIn:undefined
    SignUp:undefined
}

export type RootBottomTabParamList={
    HomeStack:NavigatorScreenParams<HomeStackParamList>
    Today:undefined
    Completed:undefined
    CategoriedStack:NavigatorScreenParams<CategoriesStackParamList>
}

export type HomeStackParamList ={
    Home:undefined
    EditTask:{
        task:ITask
    }
}
export type CategoriesStackParamList ={
    Categories:undefined
    Category:{
        id?:string
    }
    CreateCategory:{
        category?:ICategory
    }
}

export type AppStackParamList={
    Root:NavigatorScreenParams<RootBottomTabParamList>
    settings:undefined
}
export type GroupsParamList={
    GroupList:undefined
    GroupDetails:{group?:IGroup}
}
export type DrawerParamList={
    Home:undefined
    Groups:NavigatorScreenParams<GroupsParamList>
    CreateGroup:{group?:IGroup}
}
export type RootStackParamList={
    AppStack:NavigatorScreenParams<DrawerParamList>
    AuthStack:NavigatorScreenParams<AuthStackParamList>

}

declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamList{}
    }
}


export type AuthScreenNavigationType <RouteName extends keyof AuthStackParamList>=
CompositeNavigationProp<NativeStackNavigationProp<AuthStackParamList,RouteName>,NativeStackNavigationProp<DrawerParamList>>



export type RootTabScreenProps <Screen extends keyof RootBottomTabParamList>=
CompositeNavigationProp<NativeStackNavigationProp<RootBottomTabParamList,Screen>,NativeStackNavigationProp<RootBottomTabParamList>>
export type DrawerTabScreenProps <Screen extends keyof DrawerParamList>=
CompositeNavigationProp<DrawerNavigationProp<DrawerParamList,Screen>,NativeStackNavigationProp<DrawerParamList>>


export type CategoriesNavigationType=
NativeStackNavigationProp<CategoriesStackParamList>

export type HomeScreenNavigationType=NativeStackNavigationProp<HomeStackParamList>