import * as React from 'react-native';
import { View, Text,ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Checkout(){
    return(
        <NavigationContainer>
        <Drawer.Navigator initialName="Home">
        <Drawer.Screen name="Home" component={Checkout} />
        </Drawer.Navigator>
        </NavigationContainer>
    )
}