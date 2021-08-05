// In App.js in a new project

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import VideoScreen from './src/screens/VideoScreen';


const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <ProfileStack.Screen name="VideoView" component={VideoScreen} />
    </HomeStack.Navigator>
  )
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown:false}}>
      <ProfileStack.Screen name="Video" component={VideoScreen} />
    </ProfileStack.Navigator>
  )
}


function App() {

  let [fontsLoaded] = useFonts({
    'md': require('./assets/md.ttf'),
    'semiBold': require('./assets/semiBold.ttf'),
    'ubantu': require('./assets/Alata.ttf'),
    'ubantuR': require('./assets/Alata.ttf'),
  });
  console.log(fontsLoaded);


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
         <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Home') {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? <View style={{backgroundColor:'#C93432', flexDirection: 'row', width: 95, height: 40,  borderRadius: 45,justifyContent: 'center',alignItems: 'center',borderColor:'#4048F0' }}>
                <View style={{ flexDirection: 'row', }}>
                  <MaterialCommunityIcons name="home-minus-outline" size={25} color={focused ? 'white' : "lightgray"} style={{ marginTop: 0 }} />
                  <Text style={{ fontFamily: 'ubantu', fontSize: 13, color: '#fff', marginLeft: 2,marginTop:4 }}>Home</Text>
                </View>
              </View> :
                <MaterialCommunityIcons name="home-minus-outline" size={25} color={focused ? '#4048F0' : "lightgray"} style={{ marginTop: 0 }} />
              }
            </View>
          );
          } else if (route.name === 'Profile') {
            return (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? <View style={{backgroundColor:'#C93432', flexDirection: 'row', width: 95, height: 40,  borderRadius: 45,justifyContent: 'center',alignItems: 'center',borderColor:'#4048F0' }}>
                  <View style={{ flexDirection: 'row', }}>
                  <Feather name="user" size={24} color={focused ? 'white' : "lightgray"} style={{ marginTop: 0 }} />
                    <Text style={{ fontFamily: 'ubantu', fontSize: 13, color: '#fff', marginLeft: 2,marginTop:4 }}>Profile</Text>
                  </View>
              </View> :
             <Feather name="user"  size={24} color={focused ? '#4048F0' : "lightgray"} style={{ marginTop: 0 }} />
              }
            </View>
            );
          }
       },
    })}
tabBarOptions={{
  style:{backgroundColor:'#191C21',
  borderTopColor: "transparent",
  height:58,},
  showLabel:false,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

