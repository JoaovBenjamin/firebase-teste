import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./Tab.routes";

export default function Routes(){
    return(
        <>
            <NavigationContainer>
                <TabRoutes/>
            </NavigationContainer>
        </>
    )
}