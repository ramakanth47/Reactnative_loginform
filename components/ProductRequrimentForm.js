import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import EmailService from '../services/EmailService';

const ProductRequirementForm = () => {
  const [productName, setProductName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = () => {
    EmailService.sendProductRequirementEmail(email, productName);

    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, productName }),
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally, reset form fields or show success message
        setProductName('');
        setEmail('');
        Alert.alert('Form submitted successfully');
      } else {
        console.error('Failed to submit form');
        Alert.alert('Failed to submit form');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      Alert.alert('Error submitting form');
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={text => setProductName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default ProductRequirementForm;
