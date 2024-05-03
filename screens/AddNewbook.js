import React, { useEffect, useState } from "react";
import {TextInput,Button} from 'react-native'
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity} from "react-native";
import MyStyles from '../MyStyles';
import Genres from './Genres';
import SQLite from 'react-native-sqlite-storage';
import {SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Declaring variables
    const AddNewbook = ({navigation, route}) => {
    const [title , setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre ]  = useState();
    const [numOfPages, setNumOfPages] = useState('');
    const [dateRead , setDateRead] =useState('')
    const [isSubmit , setIsSubmitted] = useState('');
    const [userError , setUserError] = useState('');
    const [latestBook, setLatestBook] = useState([]);
    const [ allPagesRead, setAllPagesRead] = useState(0);
    const [ averagePages, setAveragePages] = useState(0);
    const [ latestAuthorName, setLatestAuthorName] = useState([]);
    const [ latestTitleName, setLatestTitleName] = useState([]);
    const [ latestGenre, setLatestGenre] = useState([]);
    const [ latestPages, setLatestPages] = useState([]);
    const stack = createNativeStackNavigator();
  

  //to drop table
    const dropTable = () => {
        bookDb.transaction(tx => {
          tx.executeSql(
            'DROP TABLE IF EXISTS books',
            [],
            () => console.log('Table dropped successfully'),
            error => console.error('Error dropping table:', error)
          );
        });
    };

    const myData = [
    {key: null, value: 'Select a Genre'},
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

    const genreSelection = (selected) => {
        setGenre(selected); 
        setUserError(false);
    };
//Handling submission of user data
const userSubmit = () => {
    setIsSubmitted(true);
    console.log('Title: ', title);
    console.log('Author: ', author);
    console.log('Genre: ', genre);
    console.log('Number of pages in book:', numOfPages);

    if(!title || !author || !genre || !numOfPages || !/^\d+$/.test(numOfPages)) {
        alert( 'Only use numerical values in number of pages field');
        setUserError(true);
        return;
    } 
    setTitle('');
    setAuthor('');
    setGenre('');
    setNumOfPages('');
    setDateRead('')
    setUserError(false);
};

//storing the user data

const bookDb = SQLite.openDatabase(
    {
    name: 'book_details_tracker.db',
    location: 'default',
    },
    () => console.log('Db status: Opened succesfully'),
    error => console.error('Db status: Error opening Db- ',error)
);

//Creating the table

//dropTable();
const tableCreation = () => {
      bookDb.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author text, genre TEXT, numOfPages INTEGER, dateRead TIMESTAMP)',
          [],
          () => console.log('Table status: Succesful'),
          error => console.error('Table status: error-  ', error)
        );
      });
    };



//Setting up table cols

const addUserBookDetails = (title, author, genre, numOfPages, dateRead) => {
    if (/^\d+$/.test(numOfPages)) {
    bookDb.transaction(tx => {
      tx.executeSql(
        'INSERT INTO books (title, author, genre, numOfPages, dateRead) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)',
        [title, author, genre, numOfPages],
        () => console.log('New book added succesfully'),
        error => console.error('Error in adding new book: error- ', error)
      );
    });
} else {
    alert ('Only use numerical values in the number of pages field');
}
  };




//Combining functions for OnPress

const addBookProcess = () =>{
    console.log("useEffect triggered AddNewBook");
    if(!title || !author || !genre || !numOfPages) {
        alert( 'Please ensure that all fields are filled in.');
        setUserError(true);
        return;
    }

    tableCreation();
    userSubmit();
    addUserBookDetails(title,author,genre,numOfPages, dateRead);
    
};
useEffect(() => {
    const latestBookDb = SQLite.openDatabase({
        name: 'book_details_tracker.db',
        location: 'default',
    });

    const totalPgDb = SQLite.openDatabase({
        name: 'book_details_tracker.db',
        location: 'default',
    });

    latestBookDb.transaction(tx => {
        tx.executeSql(
            'SELECT author, title, genre, numOfPages FROM books ORDER BY dateRead DESC LIMIT 1',
            [],
            (_, { rows }) => {
                if (rows.length > 0) {
                    const latestAuthorName = rows.item(0).author;
                    const latestTitleName = rows.item(0).title;
                    const latestGenre = rows.item(0).genre;
                    const latestPages = rows.item(0).numOfPages;
                    setLatestAuthorName(latestAuthorName);
                    setLatestTitleName(latestTitleName);
                    setLatestGenre(latestGenre);
                    setLatestPages(latestPages);
                } else {
                    console.log('Dev check table');
                }
            }
        );
    });

    totalPgDb.transaction(tx => {
        tx.executeSql(
            'SELECT numOfPages FROM books',
            [],
            (_, { rows }) => {
                let count = 0;
                for (let j = 0; j < rows.length; ++j) {
                    count += rows.item(j).numOfPages;
                }

                setAllPagesRead(count);

                const average = count/rows.length;
                setAveragePages(average);
            },
            (_, error) => {
                console.error('Error calculating total pages read: ', error);
            }
        );
    });
},);

const updateHomePage = () =>{
    const formatAveragePages = averagePages.toFixed(2);
    navigation.navigate('Home', {latestAuthorName: latestAuthorName, latestTitleName:latestTitleName, latestGenre: latestGenre, latestPages: latestPages, allPagesRead:allPagesRead, formatAveragePages: formatAveragePages });
};

//Formatting

    return(
        <View style={MyStyles.backgroundContain}>
        <SafeAreaView MyStyles={MyStyles.backgroundContain}>
                <View>
                    <Text>{"\n"}</Text>
                </View>

                <View style={MyStyles.container2}>
                    <Text style={MyStyles.subTitleText}>Please enter the details of your book below:</Text>   
               </View>

                <View>
                    <Text>{"\n"}</Text>
                </View>
                <View>
                    <Text>{"\n"}</Text>
                </View>
                 
                <View style= {MyStyles.inputCont}>

                    <Text style={MyStyles.inputLabel}>Title: </Text>
                    <TextInput
                    style = {[MyStyles.text, userError && !title && MyStyles.errorText]}
                    placeholder="Add Title"
                    value = {title}
                    onChangeText={setTitle}
                    />
                    
                </View>
                <View style={{ height: 10 }} />
                <View style= {MyStyles.inputCont}>
                    <Text style={MyStyles.inputLabel}>Author: </Text>
                    <TextInput
                    style = {[MyStyles.text, userError && !author && MyStyles.errorText]}
                    placeholder="Add Author"
                    value = {author}
                    onChangeText={setAuthor}
                    />
                </View>

                <View style={{ height: 10 }} />

                <View style= {MyStyles.inputCont}>
                    <Text style={MyStyles.inputLabel}>Genre: </Text>
                    <SelectList setSelected={genreSelection} 
                    data={myData}  
                    />

                </View>

                <View>
                <TextInput
                    style = {[MyStyles.textDropDown, userError && !genre && MyStyles.errorText]}
                    value={genre}
                    editable={false}
                />
                </View>


                <View style={{ height: 10 }} />
                <View style= {MyStyles.inputCont}>
                    <Text style={MyStyles.inputLabel}>Number of pages: </Text>
                    <TextInput
                    style = {[MyStyles.text, userError && !numOfPages && MyStyles.errorText]}
                    placeholder="Add total pages in book"
                    value = {numOfPages}
                    onChangeText={setNumOfPages}
                    keyboardType="numeric"
                    />
                </View>

                <View style={{ height: 10 }} />

                <View>
                    <Text>{"\n"}</Text>
                </View>
                <View>
                    <Text>{"\n"}</Text>
                </View>
                <View>
                    <Text>{"\n"}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                onPress={addBookProcess}
                style = {MyStyles.buttonStyle}
                >
                <Text style = {MyStyles.buttonStyleText}>Add New Book</Text>
                </TouchableOpacity>
                </View>
                <View>
                    <Text>{"\n"}</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                onPress={updateHomePage}
                style = {MyStyles.buttonStyle}
                >
                <Text style = {MyStyles.buttonStyleText}>Return Home</Text>
                </TouchableOpacity>
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
                <View>
                    <Text>{"\n"}</Text>
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
                <View>
                    <Text>{"\n"}</Text>
                </View>
        </SafeAreaView>
        </View>
    ) 
};

export default AddNewbook; 


