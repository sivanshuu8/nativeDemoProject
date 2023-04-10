
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from './Posts';
import Search from './Search';
import UserContext from './userContext'
import { useState, useEffect  } from 'react';

const Stack = createNativeStackNavigator();

const URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {

    const [name, setName] = useState([]);

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((json) => setName(json))
        .catch((error) => console.log(error));
    }, [])

    const a = name.map((val) => {
        const {username, id} = val;
        const obj = {
            username : username,
            id : id,
        }
        return obj;
    })




    //console.log(a);
    
    


    return(
        <NavigationContainer>
             <UserContext.Provider value={a}>
           <Stack.Navigator initialRouteName='Posts'>
                <Stack.Screen  name="Posts" component={Posts}/>
                <Stack.Screen  name="Search" component={Search}/>               
           </Stack.Navigator>
           </UserContext.Provider>
           
        </NavigationContainer>
    )
}

export default App;