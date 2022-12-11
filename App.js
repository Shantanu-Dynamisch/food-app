import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import FoodPage from './src/Screens/FoodPage/FoodPage';
FoodPage;
const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      {/* <Home /> */}
      <FoodPage />
      {/* <Login /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
