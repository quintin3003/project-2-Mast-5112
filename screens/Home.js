import React, { useEffect, useState } from "react";
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity} from "react-native";
import MyStyles from '../MyStyles';
import SQLite from 'react-native-sqlite-storage';
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({route, navigation}) => {
        const { latestAuthorName,latestTitleName,latestGenre, latestPages, allPagesRead, formatAveragePages} = route.params || {};

    return(
        <View style={MyStyles.backgroundContain}>
        <SafeAreaView>
            <View>
                    <Text>{"\n"}</Text>
            </View>            

            <View style={MyStyles.container2}>
                    <Text style={MyStyles.textHeader}>Welcome Back</Text>
            </View>

            <View style={MyStyles.container2}>
                    <Text style={MyStyles.textHeader}>Thandeka!</Text>
            </View>

            <View>
                    <Text>{"\n"}</Text>
            </View>

            <View style={MyStyles.container2}>
                    <Text style={MyStyles.subTitleText}>Let us have a look at your current stats:</Text>   
            </View>
            <View style={{ height: 80 }} />

        
            <View style={MyStyles.homeContainer}>
        <Text style={MyStyles.subTitleTextHome}>The last book that you read:</Text>
        <Text style={MyStyles.textHome}>Title: {latestTitleName}</Text>
        <Text style={MyStyles.textHome}>Author: {latestAuthorName}</Text>
        <Text style={MyStyles.textHome}>Genre: {latestGenre}</Text>
        <Text style={MyStyles.textHome}>No. of Pages: {latestPages}</Text>
        </View>

        <View style={{ height: 20 }} />

      <View style={MyStyles.homeContainer2}>
            <Text style={MyStyles.subTitleTextHome}>Total number of pages read:</Text>
            <Text style={MyStyles.textHome}>{allPagesRead}</Text>
         </View>

         <View style={MyStyles.homeContainer3}>
            <Text style={MyStyles.subTitleTextHome}>Average number of pages read:</Text>
            <Text style={MyStyles.textHome}>{formatAveragePages}</Text>
         </View>


      <View>
                    <Text>{"\n"}</Text>
            </View>
            <View>
                    <Text>{"\n"}</Text>
            </View>
            <View>
                    <Text>{"\n"}</Text>
            </View>
            <View style={{ height: 150 }} />
            <View>
                    <Text>{"\n"}</Text>
            </View>

            <View>
                    <Text>{"\n"}</Text>
            </View>

        <View style={{ height: 255 }} />

                
        </SafeAreaView>
        </View>
    ) 
}

export default Home;
