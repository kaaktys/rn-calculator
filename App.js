import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [currentNumber, setCurrentNumber] = useState('');

  function calculator() {

    let lastArr = currentNumber[currentNumber.length - 1];

    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === ',') {
      setCurrentNumber(currentNumber)
      return
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result)
      return
    }
  }

  function handleInput(buttonPressed) {
    if (buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    switch (buttonPressed) {
      case 'AC':
        setCurrentNumber('')
        return
      case '=':
        calculator()
        return
      case '±':
        setCurrentNumber((currentNumber * -1).toString())
        return
      case '%':
        setCurrentNumber((currentNumber / 100).toString())
        return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  return (
    <View style={styles.container}>
      <View className="top">
      </View>
      <View>
        <Button
          title=''
          onButtonClick={() => handleInput('C')}
          content="AC"
          type="function" />
      </View>

      <View style={styles.container}>
        <View style={styles.results}>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonGray} onPress={() => handleInput('AC')}>
            <Text style={styles.textButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => handleInput('±')}>
            <Text style={styles.textButton}>±</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => handleInput('%')}>
            <Text style={styles.textButton}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrange} onPress={() => handleInput('/')}>
            <Text style={styles.textButton}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('7')}>
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('8')}>
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('9')}>
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrange} onPress={() => handleInput('*')}>
            <Text style={styles.textButton}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('4')}>
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('5')}>
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('6')}>
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrange} onPress={() => handleInput('-')}>
            <Text style={styles.textButton}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('1')}>
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('2')}>
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('3')}>
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrange} onPress={() => handleInput('+')}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonZero} onPress={() => handleInput('0')}>
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleInput('.')}>
            <Text style={styles.textButton}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrange} onPress={() => handleInput('=')}>
            <Text style={styles.textButton}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  results: {
    maxWidth: '100%',
    minHeight: '35%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    maxHeight: 70,
    color: 'white',
    margin: 28,
    fontSize: 70,
  },
  historyText: {
    color: '#7c7c7c',
    fontSize: 28,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    display: 'flex',
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',

  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  buttonGray: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  buttonOrange: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  buttonZero: {
    display: 'flex',
    width: 179,
    height: 80,
    borderRadius: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingLeft: 30
  },
  textButton: {
    color: 'white',
    fontSize: 40,
  }
})
