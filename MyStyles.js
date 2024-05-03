import { StyleSheet } from "react-native";

const MyStyles = StyleSheet.create({
    container:{
        alignItems: 'left',
    },
    container2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100',
    },
    backgroundContain:{
        backgroundColor: '#fffff0',
    },
    textHeader:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#008080',
        
    },
    subTitleText:{
        fontSize: 24,
        fontWeight: 'bold'
        
    },
    text:{
        fontSize: 20,
        opacity: 0.7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.9,
        borderCurve: 'circular',
        borderRadius: 10,
        borderColor : '#008080',
        width:315,
        
    },
    inputCont: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputLabel:{
        width: 95,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonStyle:{
        backgroundColor: '#008080',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderCurve: 'circular',
        borderRadius: 10,
        borderColor : '#008080',
        minWidth: 10,

    },
    buttonStyleText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign : 'center',
        color: '#D8D6DC',
    },

    errorText:{
    borderColor : 'red',
    borderWidth: 2,
    },
    textDropDown:{
        fontSize: 20,
        opacity: 0.7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.9,
        borderCurve: 'circular',
        borderRadius: 10,
        borderColor : '#008080',
        width:315,
        marginLeft: 110,
    },
    homeContainer: {
        opacity: 0.9,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.0,
        borderCurve: 'circular',
        borderRadius: 10,
        borderColor : '#008080',
        width:315,
        shadowColor: '#008080',
        shadowOffset: { width: 315, height: 10 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 10,
        alignItems : 'center',
        alignSelf: "center",
      },

      subTitleTextHome:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#626869",
        textAlign: "center",
      },

      textHome:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#008080",
      },

      homeContainer2: {
        opacity: 0.9,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.0,
        borderCurve: 'circular',
        borderRadius: 10,
        borderColor : '#008080',
        width:157.5,
        shadowColor: '#008080',
        shadowOffset: { width: 315, height: 10 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 10,
        alignItems : 'center',
        alignSelf: "left",
        marginLeft: 70,
      },

      homeContainer3: {
        opacity: 0.9,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.0,
        borderCurve: 'circular',
        borderRadius: 10,
        borderColor : '#008080',
        width:157.5,
        shadowColor: '#008080',
        shadowOffset: { width: 315, height: 10 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 10,
        alignItems : "center",
        marginLeft: 230,
        marginVertical: -120,
      },
});

export default MyStyles;