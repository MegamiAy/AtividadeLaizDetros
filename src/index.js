import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function MTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: "Home"
            }}/>
            <Tab.Screen 
            name="Settings" 
            component={AboutScreen} 
            options={{
                title: "Sobre"
            }}/>
            <Tab.Screen 
            name="Settings" 
            component={ContactScreen} 
            options={{
                title: "Contato"   
            }}/>
        </Tab.Navigator>
    )
}