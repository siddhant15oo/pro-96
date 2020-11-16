import * as React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

import ResultScreen from './ResultScreen'
const APIurl="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"


export default class QuestionScreen extends React.Component { 
  constructor(){
    super()
    this.state={
      currentQuestion:0,//for indexnumber
      Loading:false,//for loading
      questions:[],
      options:[],
      score:0,
      correctanswer:""  
      
        }
  }
  
  
  
  
  //method to fetch dataa from api

async fetchQuestion(){
  return  fetch(APIurl)
  .then(response=>{
response.json()
.then(responsejson=>{
//console.log(responsejson)

//step8
//current question
//for displaying options
const  options= responsejson.results[this.state.currentQuestion].incorrect_answers;
const  correctanswer= responsejson.results[this.state.currentQuestion].correct_answer;
options.push(correctanswer)
//console.log(options[0])
//options.push(correctanswer)



this.setState({
  Loading:true,
  questions:responsejson.results,
  options:options,
  correctanswer:correctanswer

})
  //console.log(questionArray)
})
  })
  .catch(error=>{
   // console.log(error)
  })
}

componentDidMount(){
  this.fetchQuestion()
}

nextQuestion(selectAnswer){
  if(this.state.correctanswer===selectAnswer){
   console.log("correctAnswer")
   var score=this.state.score;
   score=score+1



this.setState({
  score
})


  }

else{
  console.log("incorrect")
}
var  currentQuestion=this.state.currentQuestion ;
currentQuestion=currentQuestion+1;


if(currentQuestion<this.state.questions.length){
  //chnge the question
  const  options= this.state.questions[currentQuestion].incorrect_answers;
const  correctanswer=this.state.questions[currentQuestion].correct_answer;
options.push(correctanswer)
 

//v v imp
this.setState({
  options,
  currentQuestion,
  correctanswer
})

}
else{
  this.props.navigation.navigate('ResultScreen',{score:this.state.score})
}
}
   render(){
     if(this.state.Loading == false){
       //data still not loaded
                return (
                <View>
                    <Text style={{fontSize:30,color:"red",marginLeft:100,marginTop:200}}> 
                        Loading...
                    </Text>
                </View>
                )
     }
     else{
    return(
     <ScrollView style={styles.container}>
      <View style={styles.questionContainer}>

        <Text style={styles.questionText}>
              {this.state.questions[this.state.currentQuestion].question}
        </Text>
      </View>
      /////////////////////////////////////////////////////////////////////////////////////////
      <View style={styles.answerContainer}>
        <TouchableOpacity style={styles.button} 
          onPress={()=>{this.nextQuestion(this.state.options[0])}}
        
        
        >
           <Text style={styles.answerText}>
            {this.state.options[0]}
            </Text>
         </TouchableOpacity>

      </View>
       <View style={styles.answerContainer}>
        <TouchableOpacity style={styles.button}
        
  onPress={()=>{this.nextQuestion(this.state.options[1])}}         
         >
           <Text style={styles.answerText}>
              {this.state.options[1]}
            </Text>
         </TouchableOpacity>

      </View>
       <View style={styles.answerContainer}>
        <TouchableOpacity style={styles.button} 
          onPress={()=>{this.nextQuestion(this.state.options[2])}}
        >
           <Text style={styles.answerText}>
              {this.state.options[2]}
            </Text>
         </TouchableOpacity>

      </View>
       <View style={styles.answerContainer}>
        <TouchableOpacity style={styles.button} 
         onPress={()=>{this.nextQuestion(this.state.options[3])}}
        >
           <Text style={styles.answerText}>
             {this.state.options[3]}
            </Text>
         </TouchableOpacity>

      </View>
     </ScrollView>
      
    )
  }
   }
}

const styles=StyleSheet.create({
  container:{flex:1,
  backgroundColor:"red"
  },
  questionContainer:{
marginHorizontal:10,
marginVertical:40
  }
,
questionText:{
fontSize:20,
color:"skyblue",
fontWeight:"bold",
fontFamily:"Verdana"
},
answerContainer:{
marginVertical:20,
marginHorizontal:40
},
answerText:{
fontSize:16,
color:"blue",

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
