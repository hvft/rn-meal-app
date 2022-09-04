import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Alert } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import { useState } from "react";
import NumberContainer from "../components/NumberContainer";

export default (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //ios/android
      // Alert.alert(
      //   'Invalid number',
      //   'Number has to be a number between 1 and 99',
      //   [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      // )

      //web
      alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)}/>
      </Card>
    )
  }

  return (
    // <TouchableWithoutFeedback onPress={()=>{
    //   keyboard.dismiss()
    // }}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false} 
            keyboardType='number-pad' 
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    //</TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  inputContainer: {
    display: 'flex',
    width: 300,
    maxHeight: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  button: {
    width: 100
  },
  input: {
    width: 50
  },
  summaryContainer: {

  }
})