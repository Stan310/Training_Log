import { Stack } from "expo-router";
import exercises from '../assets/data/exercises.json'
import { StatusBar, View, Text, StyleSheet } from "react-native";
export default function App() {
 
 const exercise = exercises[0];
  
 
  return (<View style = {styles.container}>
    <View style={styles.exerciseContainer}>
      <Text style = {styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>{exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}</Text>
    </View>
  </View>);
}


const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
    padding: 10,
  },

exerciseContainer: {
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 15,
  gap: 3
},

  exerciseName: {
    fontSize: 20,
    fontWeight: '700',
    
  },


  exerciseSubtitle: {
color: 'dimgray',

  }


});