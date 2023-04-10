
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

    // Posts api data fetching
    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((json) => setName(json))
        .catch((error) => console.log(error));
    }, [])


    //saving the posts data as an obj
    const data = name.map((val) => {
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
             <UserContext.Provider value={data}>
           <Stack.Navigator initialRouteName='Posts'>
                <Stack.Screen  name="Posts" component={Posts}/>
                <Stack.Screen  name="Search" component={Search}/>               
           </Stack.Navigator>
           </UserContext.Provider>
           
        </NavigationContainer>
    )
}

export default App;