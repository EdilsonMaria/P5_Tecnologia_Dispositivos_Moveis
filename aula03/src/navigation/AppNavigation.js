import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import DatailsScreen from '../screens/DatailsScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={ { headerShown: false } }>
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{ tabBarIcon: ({ color, size}) => <Ionicons name="home-outline" size={size} color={color}/> }}
            />  
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{tabBarIcon: ({color, size}) => <Ionicons name="person-outline" size={size} color={color} /> }} 
            />   
        </Tab.Navigator> 
    )
}

const AppNavigation = () => {
  return (
    <Stack.Screen initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Main" component={MainTabs} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Datails" component={DatailsScreen}></Stack.Screen>
    </Stack.Screen>
  )
}

export default AppNavigation