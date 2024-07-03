import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => (
          <Image
            source={require('../assets/Logo.png')} // Ensure this path is correct
            style={styles.headerImage}
          />
        ),
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => console.log('Search pressed')}>
              <Image
                source={require('../assets/Search.png')} // Ensure this path is correct
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('shoppingBag pressed')}>
              <Image
                source={require('../assets/shoppingBag.png')} // Ensure this path is correct
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#c0c0c0', // Set your header background color
        },
        headerTintColor: '#fff', // Set your header text color
        headerTitleAlign: 'center', // Align header text to center
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 100, // Set your image width
    height: 40, // Set your image height
    resizeMode: 'contain', // Ensures the image scales correctly
  },
  headerRightContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  headerIcon: {
    width: 24, // Set your icon width
    height: 24, // Set your icon height
    marginLeft: 15,
  },
});

export default DrawerNavigator;
