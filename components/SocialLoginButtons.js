import React from 'react';
import { View, Button } from 'react-native';
import AuthService from '../services/AuthService';

const SocialLoginButtons = () => {
   const history = useHistory();
  const [user, setUser] = useState(null);

  const handleFacebookLogin = async () => {
    try {
      
      await AuthService.loginWithFacebook();

      
      const user = await AuthService.getUser();
      setUser(user);

     
      history.push('/dashboard');

    } catch (error) {
      console.error('Error during Facebook login:', error);
      
    }
  };

  const handleGoogleLogin = () => {
     const history = useHistory();
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      
      await AuthService.loginWithGoogle();

      
      const user = await AuthService.getUser();
      setUser(user);

      
      history.push('/dashboard');

    } catch (error) {
      console.error('Error during Google login:', error);
      
    }
  };

  return (
    <View>
      <Button title="Login with Facebook" onPress={handleFacebookLogin} />
      <Button title="Login with Google" onPress={handleGoogleLogin} />
    </View>
  );
}
};

export default SocialLoginButtons;
