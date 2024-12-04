import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Home from "../screen/Home";
import Recuperar from "../screen/Recuperar";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Recuperar"
                    component={Recuperar}
                />
            </Stack.Navigator>

        </>
    )
}