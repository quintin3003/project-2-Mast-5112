import React from "react";
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'
import { View, Text } from "react-native";
import MyStyles from "../MyStyles";

const Genres = ()=>{

  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  
  const data = [
    {key:'Anthology', value:'Anthology'},
    {key:'Children', value:'Children'},
    {key:'Classic', value:'Classic'},
    {key:'Mystery', value:'Mystery'},
    {key:'Horror', value:'Horror'},
    {key:'Autobiography', value:'Autobiography'},
    {key:'Math', value:'Math'},
    {key:'Journal', value:'Journal'},
    {key:'Satire', value:'Satire'},
    {key:'Western', value:'Western'},
  ]


  return(
    <View style={{paddingHorizontal:15,marginTop:15}}>


      <SelectList setSelected={setSelected} data={data}  />

      <View style={{marginTop:50}}>
        <Text>Selected Value : </Text>
        <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
      </View>
    

    </View>
    
  )

};


export default Genres; 




