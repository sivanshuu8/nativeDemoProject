
import { useState, useEffect } from 'react';
import Posts from "./Posts";
import Search from "./Search";
import UserContext from "./userContext";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 


const URL = "https://jsonplaceholder.typicode.com/users";
const URL2 = "https://jsonplaceholder.typicode.com/posts";


  const AppContext = () => {

    const [names, setName] = useState([]);
    const [titles, setTitle] = useState([]);

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

       //  console.log(name);

       const title = titles.map((val) => {
        const {title, id, userId, body} = val;
        const obj = {
            title : title,
            id : id,
            userId : userId,
            body: body,
        }
        return obj;
    })

  //  console.log(nameData)

    const name = names.map((val) => {
        const {username, id} = val;
        const obj = {
            username : username,
            id : id,
        }
        return obj;
    })

       
        return(
            <NavigationContainer>
            <UserContext.Provider value={{name, title}}>
           <Stack.Navigator initialRouteName='Posts'>
                <Stack.Screen  name="Posts" component={Posts}/>
                <Stack.Screen  name="Search" component={Search}/>  
                       
           </Stack.Navigator>
           </UserContext.Provider> 
           
        </NavigationContainer>
        )

}
export default AppContext;
