import { StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, TouchableOpacity, Button, Modal} from "react-native";
import {  useState, useEffect, useContext  } from "react";
import theTitle from './Posts'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserContext from "./userContext";
import babelConfig from "./babel.config";



// const URL2 = "https://jsonplaceholder.typicode.com/posts";

const Search = ( {route} ) => {

    //context data from App.js 
    const { name, title } = useContext(UserContext);
    const [ModelVal, setModelVal] = useState(false);
    
    const gettingUserVal = name.map((v) => {
        return v;
    })

    /* const tester = title.map((v) => {
        return v;
    })
   // console.log(tester); */


   /*
         const ccc = cc.map((v) => {
        return v.id;
    })
   */
    
 
   // console.log(cc);

   // const [title, setTitle] = useState([]);
    // posts data 
    const { element } = route.params;
      const selectedValue = JSON.stringify(element);
  //  console.log(element);

  //User api call
 
    //console.log(title);
let obj2;
//function to match the user input to posts api and then to user api to get username
    const newFunction = (title, gettingUserVal) => {
        for(i=0; i<title.length; i++){
            for(j=0; j<gettingUserVal.length; j++){
                if(title[i].title === element){
                    obj2 = title[i];
                 const newVal = gettingUserVal.map((v) => {
                        if(obj2.userId === v.id){
                            return v.username;
                        }
                    })
                    const newVal2 = newVal.filter((el) => {
                        return el !== undefined
                    });
                    return <View>
                        <Text style={styles.Result}>
                          <Text style={styles.key}>Username: </Text><Text style={styles.resultText}>{newVal2}</Text>
                        </Text>
                    </View>
                }
            }
        }
}
  
  
let obj;
// function to match the user input with the data set and displaying the result
   const filterFunction = function x(title) {
    for(i=0; i < title.length ; i++){

        if(title[i].title === element){
            console.log('true')
            obj = title[i];
            
           
            return Object.entries(obj).map(([key, val]) => {
                return(
                    <View key={key}>
                        <Text style={styles.Result} >
                            <Text style={styles.key}>{key}
                            </Text> : <Text style={styles.resultText}>{val}</Text></Text>
                    </View>
                )
            });
        }
    }
   }
    const result = filterFunction(title);
    // console.log(e);
   const DismissModal = () => {
        setModelVal(false);
   }
 
   // console.log(b);

    return (
      <>
        
       
   
       
            <View style={[styles.pop, ModelVal ? {opacity: 0.5}: '']}>
            <TouchableWithoutFeedback>
                <View>
                <TouchableOpacity onPress={() => setModelVal(true)} style={styles.clickMeContainer}>
                <Text style={styles.clickMeBtn}>Click me!</Text>
         </TouchableOpacity>
     
      <View>  
        <Modal
        animationType="none"
        transparent={true}
        visible={ModelVal}
        onRequestClose={() => setModelVal(false)}
       // onBackdropPress = {() => setModelVal(false)}
    >
        <TouchableWithoutFeedback onPress={() => setModelVal(false)}>
            <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
     
       <View style={styles.popup}>
            <Text style={styles.alertText}>Connect "Devices" on "Things"</Text>
            <Text style={styles.modalText}>
                Please make sure the 'Device' is physically installed on the 'Thing'. And the 'Device' is on. Press "Continue" to proceed further.
            </Text>

           <View style={styles.buttonView}>
           <TouchableOpacity  style={styles.buttonContainerCon}>              
                <Text style={styles.popContinueBtn}>Continue</Text>            
           </TouchableOpacity>
           <TouchableOpacity onPress={() => setModelVal(false)} style={styles.buttonContainer}>              
                <Text style={styles.popCloseBtn}>Cancel</Text>            
           </TouchableOpacity>
           </View>
           
        </View>
     
        
        
        </Modal>
       </View>
      
       
     


 <Text style={styles.searchedResult}>
  The result you selected is :{selectedValue}
 </Text>
      {newFunction(title, gettingUserVal)}
  <View>
  <Text >
      {result}
 </Text>
  </View>
                </View>
            </TouchableWithoutFeedback>
            </View>

    
      </>
    )
        
           
        
    
}

const styles = StyleSheet.create({

    SearchBar: {
        backgroundColor: '#7c7b7a', 
        height: 50,
        alignSelf: 'stretch',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        marginHorizontal: 15,
        textTransform: 'lowercase'
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: 15,
       
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    alertText: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            paddingHorizontal: 10,
    },

    resultText: {
        fontStyle: 'italic',
    },

    clickMeContainer: {
        alignSelf: 'center',
          marginTop: 10,
    },

    clickMeBtn: {
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: "italic",
        fontFamily: 'Arial',
    },
    modalText: {
        fontWeight: 500,
        fontSize: 12,
        marginBottom: -15,
        color: 'gray',
        paddingHorizontal: 6,
        

    },
    buttonContainer: {
        marginTop: 30,
        elevation: 8,
        backgroundColor: "#112766",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15, 
        marginBottom: 2,
       marginLeft: 10,
      },

      buttonContainerCon: {
        marginTop: 30,
        elevation: 8,
        borderColor: "#112766",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15, 
        marginBottom: 2,
        borderWidth: 1,
        marginRight: 10,
      },

      popContinueBtn : {
        color: '#112766',
        fontWeight: 'bold',
        borderRadius: 5,
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        
    },

    popCloseBtn : {
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5,
        paddingHorizontal: 20,
        fontFamily: 'Arial',

        
    },

    popup : {
        alignItems: 'center',
        borderColor: "white",
        justifyContent: 'center',
       // backgroundColor: '#f3f2f0',
       backgroundColor: 'white',
        marginTop: 250,
        width: 300,
        height: 180,
        padding: 1,
        borderRadius: 6,
        marginHorizontal: 35,
      //  borderColor: 'black',
        borderWidth: 1,
    },
  
    Result:{
        
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        marginTop: 15,
       // backgroundColor: '#fff',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginHorizontal:15,
        padding: 5,
       // borderColor: 'black',
       // borderWidth: 0.3,
        color: 'black',
        borderRadius: 3,
        //alignItems: 'center',
        flexWrap: 'wrap',
    },
    SearchContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titleStyle:{
        padding: 4,
        backgroundColor: 'white',
        margin: 2,
       
        
        },
    searchedResult: {
        marginBottom: 15,
        marginTop: 10,
        alignSelf: 'center'
    },
    key : {
        fontSize:20,
        color: 'blue',
    }

})

/*  const { id } = val;
            return id; */

export default Search;

/*
    (
            <View style={styles.titleStyle}>
                <Text>
                   {val}
                </Text>
            </View>
        )
*/

/* 
        style={styles.titleStyle}
*/

// {'\n'}