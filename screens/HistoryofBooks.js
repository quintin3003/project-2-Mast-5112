import React from "react";
import { StyleSheet} from 'react-native'
import {SafeAreaView, ScrollView, View, Text} from "react-native";



const styles = StyleSheet.create({
    containerColour: {
        flex: 1,
        backgroundColor: "#998770",
    },
});
const HistoryofBooks = ()=>{
    return(
        <SafeAreaView>
            
            <View>
                    <Text>Title</Text>
                    
                </View>
                <View>
                    <Text>Author</Text>
                </View>
                <View>
                    <Text>Number of Pages</Text>
                </View>
                <View>
                    <Text>Genre</Text>
                </View>

                
                <View>
                    <Text>Title</Text>
                </View>
                <View>
                    <Text>Author</Text>
                </View>
                <View>
                    <Text>Number of Pages</Text>
                </View>
                <View>
                    <Text>Genre</Text>
                </View>

                <View>
                    <Text>Title</Text>
                </View>
                <View>
                    <Text>Author</Text>
                </View>
                
                <View>
                    <Text>Number of Pages</Text>
                </View>

                <View>
                    <Text>Genre</Text>
                </View>
                
        </SafeAreaView>
    ) 
}

export default HistoryofBooks; 
