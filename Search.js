import { StyleSheet, TextInput, View, Text, Touchable, TouchableOpacity} from "react-native";
import {  useState  } from "react";



const Search = ({ name }) => {

    const [term, setTerm] = useState('');

    const a = name.map((usernames) => {
        const {username} = usernames;
        
        return username;
        
    })
    


    return(
        
            <View style={styles.SearchContainer}>
                <TextInput
                 placeholder="Search" 
                 style={styles.SearchBar} 
                 autoCorrect={false}
                 autoCapitalize="none"
                 onChangeText={(text) => setTerm(text)}
                 />
                 {
                //
            
                a.filter((val) => {
                    console.log(term);
                    return term && val.toLowerCase().startsWith(term.toLowerCase());
                })
                .slice(0,5)
                .map((namee) =>{
                    console.log(namee);
                    return (
                        <TouchableOpacity>
                            <View>
                            <Text style={styles.Result}>
                                {namee}
                            </Text>
                        </View>
                        </TouchableOpacity>
                    )
                })
                 }
            </View>
        
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
        backgroundColor: '#fff',
        fontSize: 18,
        width: 325,
        marginHorizontal:15,
        padding: 3,
        borderColor: 'black',
        borderWidth: 0.8
    },
    SearchContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }

})

export default Search;