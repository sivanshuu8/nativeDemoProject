import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect, useContext} from "react";
import { createContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from "./Search";




const theTitle = createContext();
const URL = "https://jsonplaceholder.typicode.com/users";
const URL2 = "https://jsonplaceholder.typicode.com/posts"


export default Posts = ({ navigation }) => {

    //user search data
    const [term, setTerm] = useState('');


    // Posts and User api data
    const [name, setName] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((json) => setName(json))
        .catch((error) => console.log(error));
    }, [])

    useEffect(() => {

    
            fetch(URL2)
            .then((response) => response.json())
            .then((json) => setTitle(json))
            .catch((error) => console.log(error))
        
        }, [])
       


   // console.log(term);

   // saving post api data in a variable 
    const post = title.map((titlee) => {
        const {title} = titlee;
        
        return title;
        
    })

    // fn for testing 
    const displayName = name.map((val) => {
            const { username } = val;
            return <View style={styles.userName}>
                <Text>
                    {username}
                </Text>
            </View>
    })

   


    //console.log(name)
   // console.log(term);

    return(
            <View style={styles.SearchContainer}>
                <TextInput
                 placeholder="Search" 
                 style={styles.SearchBar} 
                 autoCorrect={false}
                 autoCapitalize="none"
                 onChangeText={(text) => { setTimeout(() => {
                    setTerm(text);
                 }, 500)}}
                />
                <View  key={post.id}>

                {
                    post.filter((val) => {
                        //console.log(term);
                        return val.toLowerCase().startsWith(term.toLowerCase());
                    })
                    .slice(0,20)
                    .map((el) =>(
                        <TouchableOpacity 
                        onPress={() => {
                            const onPress = () => {
                                
                                
                               return (
                                    <>
                                
                                {navigation.navigate('Search', {
                                    element: el,
                                })}                               
                                    </>                              
                               )
                            }
                            onPress();
                        }}
                        >
                            
                        <View key={el.id} style={styles.boxes}>
                            <Text>
                                {el}                       
                            </Text>
                            
                            
                        </View>
                        </TouchableOpacity>
                    )
                    )
                                           
                    }    
                </View>

             
                         
            </View>         
       
    )
}

    

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f3f3f3",
        height: 1000,
        marginTop: 10,
    },
    boxes: {
        padding: 10,
        margin: 10,
        backgroundColor: "#fff",
        alignSelf: 'stretch'
    },
    userName: {
        fontSize: 20,
        color: "#1652c9"
    },
    header: {
        flex: 1,
        alignContent: 'center',
    },
    Lists: {
        marginTop: 15
    },
    SearchContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    SearchBar: {
        backgroundColor: '#fff',
        height: 50,
        alignSelf: 'stretch',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        marginHorizontal: 15,
        textTransform: 'lowercase'
    }
})

export { theTitle };
// <Search title={title} />

/*   <FlatList 
                style={styles.Lists}
                data={(title, name)}
                renderItem={({item}) => { 
                        title.map((title) => {
                          
                            if(item.id === title.id){
                                
                                
                                    arr1 = item.username;
                                    arr2 = title.title;
                                
 
                          }
                        })

                      
                }}
            /> */

            /* 
            <FlatList 
                style={styles.Lists}
                data={{a}}
                renderItem={({a}) => {
                    a.filter((val) => {
                        console.log(term);
                        return val.toLowerCase().startsWith(term.toLowerCase());
                    })
                    .slice(0,5)
                    .map((title) => {
                        console.log(title);
                        return(
                            <TouchableOpacity>
                                <View>
                                    <Text>
                                        {title.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    
                }}
                />
                navigation.navigate('Search')
            */