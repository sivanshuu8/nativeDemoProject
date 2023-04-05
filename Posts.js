import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Search from "./Search";







const URL = "https://jsonplaceholder.typicode.com/users";
const URL2 = "https://jsonplaceholder.typicode.com/posts"


export default App = () => {

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

    let arr1 = [];
    let arr2 = [];

    //console.log(name);

    return(

            
        <View style={styles.container}> 
                <Search name={name} />
               
            
            <FlatList 
                style={styles.Lists}
                data={(title, name)}
                renderItem={({item}) => { 
                        title.map((title) => {
                          
                            if(item.id === title.id){
                                
                                
                                    arr1 = item.username;
                                    arr2 = title.title;
                                
 
                          }
                        })

                        return(
                            
                            <View style={styles.boxes}>
                                <TouchableOpacity>
                                <View>
                                <Text>
                                    {arr2.slice(0,50)+`...`}
                                </Text>
                                <Text style={styles.userName}>
                                    {arr1}
                                </Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                          
                        )
                      
                }}
            />
           

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
    }
})