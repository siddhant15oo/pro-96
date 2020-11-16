import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground,Vibration, Image } from 'react-native';



export default class SplashScreen extends React.Component{
    constructor(){
        super()
          setTimeout(() => {
              this.props.navigation.navigate('HomeScreen')
          }, 10000);
        }
    
    

    render(){
        return(
            <View>
                
               
                   <Text>Splash</Text>
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
    
   },
   
   showScore:{
       marginBottom:400,
       marginLeft:400,
       color:'green',

   }

  })
  