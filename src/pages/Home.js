import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';

export function Home() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}> React Native </Text>
      <TextInput
        style={styles.input}
        placeholder="New skill" placeholderTextColor="#555"
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}> Add</Text>

      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 25 }]}> My Skills</Text>
    </View>
  )
}
//sdsd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
    // borderColor: '#404040',
    // borderWidth: 1,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,

  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',

  }
});


