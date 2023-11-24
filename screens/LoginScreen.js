import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from 'react-native-google-signin';
import { Animated } from 'react-native';

const clientId = '1049345531206-67l3i359qsevs174naudcqj5id5a8f1p.apps.googleusercontent.com';

// Google Login Success and Failure Callbacks
const onSuccess = (response) => {
  console.log('Google login successful:', response);
  // Handle the successful login, e.g., navigate to the next screen
};
const onFailure = (error) => {
  console.log('Google login failed:', error);
  // Handle the failed login, e.g., show an error message
};

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="light" />
      <Image style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} source={require('../assets/images/background.png')} />

      {/* lights */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', width: '100%' }}>
        <Animated.Image
          source={require('../assets/images/light.png')}
          style={{ height: 225, width: 90 }}
        />
        <Animated.Image
          source={require('../assets/images/light.png')}
          style={{ height: 160, width: 65, opacity: 0.75 }}
        />
      </View>

      {/* title and form */}
      <View style={{ flex: 1, justifyContent: 'space-around', paddingTop: 40, paddingBottom: 10 }}>
        <Animated.View
          style={{ width: '100%', opacity: 0, transform: [{ translateY: -20 }] }} // Placeholder animation styles
        >
          {/* Google Login Button */}
          <GoogleSignin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </Animated.View>

        {/* title */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Animated.Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1, fontSize: 30 }}>
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View style={{ flex: 2, alignItems: 'center', marginHorizontal: 5, justifyContent: 'space-between' }}>
          <Animated.View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, borderRadius: 20, width: '100%' }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, borderRadius: 20, width: '100%', marginBottom: 20 }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View style={{ width: '100%', opacity: 0, transform: [{ translateY: 20 }] }}> 
            <TouchableOpacity style={{ backgroundColor: '#3498db', padding: 15, borderRadius: 20, marginBottom: 20 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={{ flexDirection: 'row', justifyContent: 'center', opacity: 0, transform: [{ translateY: 20 }] }}>
            <Text style={{ color: 'black' }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Signup')}>
              <Text style={{ color: '#3498db' }}>SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
