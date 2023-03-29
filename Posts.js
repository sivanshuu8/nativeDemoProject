import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";







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

    //console.log(name);

    return(

                <ScrollView >
        <View style={styles.container}> 
        <Text style={styles.header}>
            Posts
        </Text>

                
                    {name.map((name) => (
                        <View key={name.id}>
                        {title.map((title) => (

                            <View style={styles.boxes} key={title.id}>
                            <Text>
                            {title.title.slice(0,50)+`...`}
                                {'\n'}
                                </Text>
                                <View >
                                <Text style={styles.userName}>
                                {name.username}
                            </Text>
                            </View>
                            </View>
                        ))}
                        </View>
                    ))}
        </View>
        </ScrollView>

       
    
       
    )
}

    

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f3f3f3",
        height: 1000,
        marginTop: 40,
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
    }
})