// Login page
import {
  ImageBackground,
  StyleSheet,
  View,
  button,
  Button,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const Login = () => {
  const onPressFunction = () => {};
  return (
    <View>
      <ImageBackground
        source={require('../Screens/images/home.jpg')}
        resizeMode="cover"
        style={styles.imgBackground}>
        <View style={styles.section}>
          <Text>Enjoy delicious meals right now 😋</Text>
          <TouchableHighlight style={styles.button}>
            <SignUp>Sign up</SignUp>
          </TouchableHighlight>
          <Mini>Don't have account? Signup</Mini>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const Text = styled.Text`
  font-size: 48px;
  color: '#ffff';
  padding-bottom: 40px;
  font-weight: 800;
`;

const SignUp = styled.Text`
  align-items: 'center';
  font-weight: 800;
  font-size: 22px;
  padding: 20px;
  color: '#ffff';
`;

const Mini = styled.Text`
  padding-left: 70px;
  padding-top: 10px;
  font-size: 18px;
  color: '#ffff';
`;

// const Button = styled.button``

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  section: {
    paddingLeft: 25,
    paddingTop: 500,
  },
  //  heading: {
  //   fontSize: 48,
  //   fontWeight: 'bold',
  //   color: '#ffffff',
  //   paddingBottom: 40,
  // },
  button: {
    width: 350,
    color: '#ff0',
    backgroundColor: '#FFAE42',
    borderRadius: 20,
  },
  // text: {
  //   // borderWidth: 1,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 22,
  //   padding: 20,
  //   // borderColor: '#ff0',
  //   color: '#ffff',
  //   letterSpacing: 1,
  // },
  // mini: {
  //   paddingLeft: 70,
  //   paddingTop: 10,
  //   // fontWeight: 'bold',
  //   fontSize: 18,
  //   letterSpacing: 1,
  //   color: '#ffffff',
  // },
});
