
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from './Posts';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
           <Stack.Navigator>
                
                <Stack.Screen  name="Posts" component={Posts}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;