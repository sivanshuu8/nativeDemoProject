
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from './Posts';
import Search from './Search';
import UserContext from './userContext'
import { useState, useEffect  } from 'react';
import AppContext from './AppContext'

// const Stack = createNativeStackNavigator();



const App = () => {


    return(
        <AppContext />
    )
}

export default App;

//  <UserContext.Provider value={data}>