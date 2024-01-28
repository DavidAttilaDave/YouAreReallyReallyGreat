import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Platform, Alert } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.length > 0) {
      setSubmitted(true);
    } else {
      // Használjunk platformspecifikus figyelmeztetést
      Platform.OS === 'web' ? alert('Please enter your name.') : Alert.alert('Please enter your name.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {submitted ? `You are really, really great, ${name}!` : "What's your first name?"}
      </Text>
      {!submitted && (
        <TextInput
          style={styles.input}
          placeholder="Your first name"
          value={name}
          onChangeText={setName}
        />
      )}
      {!submitted && (
        <Button
          title="Submit"
          onPress={handleSubmit}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 20,
  },
});
