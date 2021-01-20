import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Team from './Abc/SectionComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HeaderTxt}>ScooreKeeper</Text>
      </View>
      <Team title="Team 1" />
      <Team title="Team 2" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    paddingTop: 0
  },
  header: {
    backgroundColor: 'blue',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeaderTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
