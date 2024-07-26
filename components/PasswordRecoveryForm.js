import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import EmailService from '../services/EmailService'; // Assuming EmailService is correctly implemented
import { Tokens, Users } from '../services/Database'; // Assuming Tokens and Users are correctly implemented
import { hash } from '../services/PasswordHash'; // Assuming a password hashing function is implemented

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = async () => {
    try {
     
      if (!email.trim()) {
        Alert.alert('Error', 'Please enter your email.');
        return;
      }

      
      const token = generateRandomToken();

      
      saveTokenToDatabase(email, token);
      
       const recoveryLink = `https://fakestoreapi.com/reset-password?token=${token}`;   
      
      const response = await EmailService.sendPasswordRecoveryEmail(email, recoveryLink);

      
      if (response.status === 'success') {
        Alert.alert('Success', 'Password recovery email sent successfully.');
      } else {
        Alert.alert('Error', 'Failed to send password recovery email. Please try again later.');
      }

    } catch (error) {
      console.error('Error recovering password:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  const handlePasswordReset = async (token, newPassword) => {
    try {
      
      const storedToken = await Tokens.findOne({ token: token });

      
      if (storedToken && !isTokenExpired(storedToken.createdAt)) {
       
        await updatePasswordInDatabase(storedToken.email, newPassword);

        
        invalidateToken(token);

        Alert.alert('Success', 'Password updated successfully.');
        return true;
      } else {
        Alert.alert('Error', 'Invalid or expired token. Please try again.');
        return false;
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
      return false;
    }
  };

  const generateRandomToken = () => {
    return require('crypto').randomBytes(40).toString('hex');
  };

  const saveTokenToDatabase = (email, token) => {
    Tokens.create({ email: email, token: token, createdAt: new Date() });
  };

  const isTokenExpired = (createdAt) => {
    const expirationTime = 60 * 60 * 1000; // 1 hour in milliseconds
    const now = new Date();
    return now.getTime() - createdAt.getTime() > expirationTime;
  };

  const updatePasswordInDatabase = (email, newPassword) => {
    Users.updateOne({ email: email }, { password: hash(newPassword) });
  };

  const invalidateToken = (token) => {
    Tokens.deleteOne({ token: token });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <Button title="Recover Password" onPress={handleRecoverPassword} />
    </View>
  );
};

export default PasswordRecoveryForm;
