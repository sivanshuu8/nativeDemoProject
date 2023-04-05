
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from './Posts';
import Search from './Search';


const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
           <Stack.Navigator initialRouteName='Posts'>
                <Stack.Screen  name="Posts" component={Posts}/>
                <Stack.Screen  name="Search" component={Search}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;