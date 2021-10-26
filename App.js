import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Splash from './files/Splash';
import Login from './files/Login';
import Account from './files/Account';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import SplashScreen from './components/onBoardScreen(SplashScreen)/SplashScreen';
//import { createAppContainer } from 'react-navigation';
//import Register from './components/registerComponents/register';

const Stack = createStackNavigator();

 export default function App() {
   return (
    //  <NavigationContainer>
    //    <Stack.Navigator
    //     screenOptions={{
    //      headerShown: true,
    //    }}
    //    initialRouteName={"Splash"}
    //    >
    //      <Stack.Screen name="Splash" component={Splash}/>
    //      <Stack.Screen  name='register' component={Register} />
    //    </Stack.Navigator>
    //  </NavigationContainer>

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name = "Login" component={Login} options={{
                headerShown : false
            }} />

        <Stack.Screen name ="Account" component={Account} />
        <Stack.Screen name="Splash" component={Splash} options={{
            headerShown : false
        }} />

        </Stack.Navigator>
    </NavigationContainer>
   );
 }

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',     alignItems: 'center',
     justifyContent: 'center',
   },
 });

// const App=createStackNavigator({
// Splash:{screen:Splash,navigationOptions:{header:null}},
// Login:{screen:Login, navigationOptions:{header:null}}

// });

// export default createAppContainer(App);
