import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    results: {
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 45,
      color: '#00b9d6',
      margin: 15,
      fontSize: 35,
    },
    historyText: {
      color: '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    buttons: {
      width: '110%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'orange',
      borderRadius: 50,
      height: 100,
      width: 100,
    },
    textButton: {
      color: 'white',
      fontSize: 28,
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>0</Text>
        <Text style={styles.resultText}>0</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Button title='hi' color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}