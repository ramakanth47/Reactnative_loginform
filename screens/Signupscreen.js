// SignUpScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SignUpScreen; // Ensure default export

