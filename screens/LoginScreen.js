import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/LoginForm';
import SocialLoginButtons from '../components/SocialLoginButtons';

const LoginScreen = () => {
  return (
    <View>
      <LoginForm />
      <SocialLoginButtons />
    </View>
  );
};

export default LoginScreen;
