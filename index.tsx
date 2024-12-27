import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [calculation, setCalculation] = useState('');

  const handlePress = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        setResult(eval(calculation)); // Avoid using eval in production
      } catch (error) {
        setResult('Error');
      }
    } else if (buttonValue === 'C') {
      setResult('');
      setCalculation('');
    } else {
      setCalculation(calculation + buttonValue);
    }
  };

  return (
    <View style={styles.container}>
      {/* Calculator Display */}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{calculation}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Calculator Buttons */}
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+', 'C'].map((button) => (
          <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handlePress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Vinay</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 10,
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  button: {
    width: '22%',
    height: 75,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#817c75',
  },
  footerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
