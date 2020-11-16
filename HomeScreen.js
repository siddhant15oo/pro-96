import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native';
import {Header} from 'react-native-elements'



export default class HomeScreen extends React.Component{
    goToQuiz=()=>{
        this.props.navigation.navigate('QuestionScreen')
    }
    render(){
        return(
            <View>
                <Header  backgroundColor={'#ffff70'}
          centerComponent={{
            text: 'Quiz App',
            style: { color: 'black', fontSize: 15, fontWeight: 700 },
          }}/>
            <View>
                <ImageBackground source={require('../assets/QuizApp.png')} style={{width:200,height:200, marginLeft:Dimensions.get('window').width/2.35}}/>
                
                <TouchableOpacity style={styles.button}
                onPress={this.goToQuiz}>
                    <Text style={styles.text2}>START</Text>
                </TouchableOpacity>
            </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
      marginTop: 20,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      
    },
  
    text2: {
      color: 'black',
  
      fontSize: 20,
      textAlign: 'center',
      
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    button: {
      padding: 20,
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: '#07B89E',
      marginTop: 80,
      borderRadius: 50,
      width: '80%',
      alignSelf: 'center',
      height: 80,
    },
   
  });
  