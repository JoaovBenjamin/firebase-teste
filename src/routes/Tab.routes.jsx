import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screen/Login";
import Register from "../screen/Register";
import StackRoutes from "./Stack.routes";
import Recuperar from "../screen/Recuperar";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen 
                    name="Login"
                    component={StackRoutes}
                />
                <Tab.Screen
                    name="Register"
                    component={Register}
                />
            </Tab.Navigator>
        </>
    )
}