import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Firebase, { FirebaseProvider } from './src/config/index';
import Home from './src/screens/home/Home';
import Signin from './src/screens/signin/Signin';
import Signup from './src/screens/signup/Signup';
import Profile from './src/screens/profile/Profile';

// stack che contiene signin e signup
const AuthStack = createStackNavigator();
function AuthStackComponent() {
  return (
    <AuthStack.Navigator initialRouteName="Login" mode="card" headerMode="none">
      <AuthStack.Screen name="Accedi" component={Signin} />
      <AuthStack.Screen name="Registrati" component={Signup} />
    </AuthStack.Navigator>
  )
}

// navigator dell'app vera e propria
const RootTabNavigator = createBottomTabNavigator();
// Home Categorie Prenotazioni Profilo
function RootTabNavigatorComponent(logged) {
  return (
    <RootTabNavigator.Navigator>
      <RootTabNavigator.Screen name="Home" component={Home} initialParams={{ myname: "flavio" }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }} />
      <RootTabNavigator.Screen name="Store" component={Home} initialParams={{ myname: "flavio" }}
        options={{
          tabBarLabel: 'Categorie',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="store" color={color} size={size} />
          ),
        }} />
      <RootTabNavigator.Screen name="Prenotazioni" component={Home} initialParams={{ myname: "flavio" }}
        options={{
          tabBarLabel: 'Prenotazioni',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-today" color={color} size={size} />
          ),
        }} />
      <RootTabNavigator.Screen name="Profilo" component={Profile}
        initialParams={{ myname: "flavio" }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            // Prevent default action
            if (!route.params.logged) {
              e.preventDefault();
              // Do something with the `navigation` object
              navigation.navigate('Accesso');
            }

          },
        })
        }
        options={{
          tabBarLabel: 'Profilo',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
        }} />

    </RootTabNavigator.Navigator>
  )
}

export default function App() {
  var [isLogged, setIsLogged] = useState(0);

  Firebase.checkUserAuth(user => {
    if (user) {
      // if the user has previously logged in
      console.log("logged in");
      setIsLogged(true);
    } else {
      // if the user has previously logged out from the app
      console.log("not logged");
      setIsLogged(false);
    }
  });

  const RootStack = createStackNavigator();

  return (
    // stack che contiene applicazione e auth

    <FirebaseProvider value={Firebase}>
      <NavigationContainer theme={DefaultTheme}>
        <RootStack.Navigator initialRouteName="Applicazione" mode="modal" headerMode="none">
          <AuthStack.Screen name="Applicazione" component={RootTabNavigatorComponent} logged={isLogged} />
          <AuthStack.Screen name="Accesso" component={AuthStackComponent} />
        </RootStack.Navigator>
      </NavigationContainer>
    </FirebaseProvider>
  )
}



