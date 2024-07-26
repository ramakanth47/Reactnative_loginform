class AuthService {
  static login(email, password) {
    console.log(`Logging in with ${email} and ${password}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'abc@gmail.com' && password === 'password') {
          resolve({ userId: 1, username: 'testuser' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  static loginWithFacebook() {
    console.log('Logging in with Facebook');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ userId: 2, username: 'facebookuser' });
      }, 1000);
    });
  }

  static loginWithGoogle() {
    console.log('Logging in with Google');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ userId: 3, username: 'googleuser' });
      }, 1000);
    });
  }

  static signUp(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'existing@example.com') {
          reject(new Error('Email already in use'));
        } else {
          resolve({ message: 'User signed up successfully' });
        }
      }, 1000);
    });
  }
}

export default AuthService;
