/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import BottomTabs from './Navigation/BottomTabs';
import { createStackNavigator } from '@react-navigation/stack';
import Drawernav from './Navigation/DrawerNav';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
      <NavigationContainer>
        {/* <BottomTabs /> */}
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name = "Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name = "Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name = "HomeNavigation"
            component={Drawernav}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;
