import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground,Vibration } from 'react-native';
import {Header} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default class ResultScreen extends React.Component{
    

    render(){
        return(
            <View>
                <Text style={{marginLeft:250, marginTop:200, fontSize:30, backgroundColor:'orange'}}> Your Score is :{this.props.navigation.getParam('score')}/10</Text>
                <View>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate('HomeScreen')
                    }}>
                        <Text>Go Back To Home Screen</Text>
                    </TouchableOpacity>
                </View>
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

   },
button:{
   borderWidth:2,
  borderRadius:7,
  width:400,
  height:80,
  paddingVertical:10,
  paddingHorizontal:20
}
  })
  