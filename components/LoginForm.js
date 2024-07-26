import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AuthService from '../services/AuthService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    
    AuthService.login(email, password)
      .then((response) => {
       
        console.log('Login successful:', response);
        
      })
      .catch((error) => {
        
        console.error('Login error:', error);
        setError('Invalid credentials. Please try again.');
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
