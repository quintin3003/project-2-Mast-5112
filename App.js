import React, { useState } from "react";
import MyStyles from'./MyStyles';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Text, TextInput, View, Animated} from 'react-native';


import Home from "./screens/Home";
import AddNewbook from "./screens/AddNewbook";
import Genres from "./screens/Genres";
import HistoryofBooks from "./screens/HistoryofBooks";


import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator() ;
const App = () =>{
    const [bookData, setBookData] = useState([])
        return(
            <NavigationContainer>
                <Tab.Navigator 
                screenOptions={{
                    tabBarLabelPosition: "below-icon",
                    tabBarShowLabel: true,
                    tabBarActiveTintColor:"#008080",}}
                    tab>
                        <Tab.Screen name = "Home" component={Home}
                        options={{
                            tabBarLabelStyle: {
                                fontSize: 15,
                                marginBottom:5,
                                fontWeight: 'bold',
                            },
                            tabBarIcon:({color,size}) => (
                                <Icon name = "home-outline"
                                color = {343231}
                                size = {20}
                                />
                            ),
                        }}
                        />
                    <Tab.Screen name = "Add New book" component = {AddNewbook}
                    options = {{
                        tabBarLabelStyle:{
                            fontSize: 15,
                            marginBottom:5,
                            fontWeight: 'bold',
                        },
                        tabBarIcon:({color,size}) =>(
                        <Icon name = "person-add-outline"
                        color = {('black')}
                        size ={20}
                        />
                    )
                }}
          />
                    <Tab.Screen name="Genres" component ={Genres}
                    options = {{
                        tabBarLabelStyle:{
                            fontSize: 15,
                            marginBottom:5,
                            fontWeight: 'bold',
                        },
                        tabBarIcon:({color, size}) =>(
                            <Icon name="options-outline"
                            color={'black'}
                            size={20}
                            />
                        ),
                    }}
                />

                    <Tab.Screen name = "Book History" component = {HistoryofBooks}
                    options ={{
                        tabBarLabelStyle:{
                                fontSize: 15,
                                marginBottom:5,
                                fontWeight: 'bold',
                        },
                        tabBarIcon:({color,size}) =>(
                            <Icon name = "aperture-outline"
                            color={'black'}
                            size={20}
                            />
                        )
                    }}
                 />


                    </Tab.Navigator>
                    </NavigationContainer>
        
        )
};
export default App;


