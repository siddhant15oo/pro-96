import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

import UserLoginSignupScreen from './screens/UserLoginSignupScreen'
import HomeScreen from './screens/HomeScreen'
import QuestionScreen from './screens/QuestionScreen'
import ResultScreen from './screens/ResultScreen'
import SplashScreen from './screens/SlashScreen';


export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer />
      </View>
    )
  }
}

const switchNav=createSwitchNavigator({
//UserLoginSignupScreen:{screen:UserLoginSignupScreen},
HomeScreen:{screen:HomeScreen},
QuestionScreen:{screen:QuestionScreen},
ResultScreen:{screen:ResultScreen},
Splash:{screen:SplashScreen}
})

const AppContainer=createAppContainer(switchNav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
