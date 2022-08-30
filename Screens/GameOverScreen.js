import React from 'react';
import {StyleSheet, View, Text,Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from  '../constant/colors';




const GameOverScreen= props =>{
return(
    <View style={styles.screen}>
        <Text>The Game is over!</Text>
        <View style={styles.imageContainer}>
        <Image 
        fadeDuration={10000}
       // source={require('../assets/success.png')}
        source={{uri:'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
         style={styles.image}
        resizeMode="cover"/>
        </View>
        <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}> Your Phone needed{''}<Text style={styles.highlight}> {props.roundsNumber} </Text>rounds to guess the number
        <Text style={styles.highlight}> {props.userNumber} </Text>
        </BodyText>
        </View>
        <MainButton  onPress={props.onRestart}>
            New GAME
        </MainButton>
    </View>
)
};
const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
imageContainer:{
    width:300,
    height:300,
     borderRadius:150,
     borderWidth:3,
     borderColor:'black',
     overflow:'hidden',
     marginVertical:30
},
image:{
    width:'100%',
    height:'100%',
},
resultContainer:{
    marginHorizontal:30,
    marginVertical:15,
},
resultText:{
    textAlign:'center',
    fontSize:20,
},
highlight:{
    color:Colors.primary,
    fontFamily:'open-sans-bold',
}
});
export default GameOverScreen;