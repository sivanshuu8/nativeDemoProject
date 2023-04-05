import { StyleSheet, TextInput, View, Text, Touchable, TouchableOpacity} from "react-native";
import {  useState, useEffect  } from "react";
import theTitle from './Posts'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const URL2 = "https://jsonplaceholder.typicode.com/posts";

const Search = ( {route} ) => {

    const [title, setTitle] = useState([]);

    const { element } = route.params;
      const selectedValue = JSON.stringify(element);
  //  console.log(element);

    useEffect(() => {
        fetch(URL2)
            .then((response) => response.json())
            .then((json) => setTitle(json))
            .catch((error) => console.log(error))
    }, [])

    //console.log(title);
        
  
let obj;
   const filterFunction = function x(title) {
    for(i=0; i < title.length ; i++){

        if(title[i].title === element){
            console.log('true')
            obj = title[i];
            
           
            return Object.entries(obj).map(([key, val]) => {
                return(
                    <View>
                        <Text style={styles.Result}>
                            <Text style={styles.key}>{key}
                            </Text> : {val}</Text>
                    </View>
                )
            });
        }
    }
   }
    const result = filterFunction(title);
    // console.log(e);
  

   
 
   // console.log(b);

    return (
      <>
       <Text style={styles.searchedResult}>
        The result you selected is :{selectedValue}
       </Text>

        <View>
        <Text >
            {result}
       </Text>
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
    Result:{
        marginTop: 15,
        backgroundColor: '#fff',
        fontSize: 15,
        alignSelf: 'center',
        marginHorizontal:15,
        padding: 5,
        borderColor: 'black',
        borderWidth: 0.3,
        color: 'black',
        borderRadius: 3,
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
        fontSize:17,
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