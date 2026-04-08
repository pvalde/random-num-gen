import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 8,
  },
});

const getRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const App = () => {
  const [min, setMin] = useState('0');
  const [max, setMax] = useState('100');
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <Text>Minimum:</Text>
      <TextInput
        style={styles.input}
        value={min}
        onChangeText={setMin}
        keyboardType="numeric"
        placeholder="0"
      />
      <Text>Maximum:</Text>
      <TextInput
        style={styles.input}
        value={max}
        onChangeText={setMax}
        keyboardType="numeric"
        placeholder="100"
      />
      <Button
        title="Generate"
        onPress={() => {
          const number = getRandom(parseInt(min, 10), parseInt(max, 10));
          setRandomNumber(number);
        }}
      />
      <Text>{`NUMBER: ${randomNumber}`}</Text>
    </View>
  );
};
export default App;
