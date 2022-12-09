// Home Screen
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components';
// import {Icon} from '@react-native-vector-icons';

const Home = () => {
  return (
    <ScrollView style={styles.body}>
      {/* Top icons */}
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Iconimg1 source={require('../Screens/images/drawer.png')}></Iconimg1>
        <Iconimg source={require('../Screens/images/user.png')} />
      </View>

      {/* Main heading  */}
      <View style={styles.heading}>
        <Heading style={{marginTop: 40}}>Find And order </Heading>
        <Heading>Your Favorite dish 🤗</Heading>
      </View>

      {/* Search bar  */}
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Search1 style={{backgroundColor: '#d3d3d3'}}>
          <Iconimg3 source={require('../Screens/images/searchh.png')} />
        </Search1>
        <Search2>
          <Iconimg4 source={require('../Screens/images/filter.png')} />
        </Search2>
      </View>

      {/* Horizontal cards */}
      <ScrollView horizontal={true} style={styles.scrollhor}>
        <Horicard1 style={styles.card}>🌶 Spicy</Horicard1>
        <Horicard2 style={styles.card1}>🥑 Healphy</Horicard2>
        <Horicard2 style={styles.card1}> 🥙 </Horicard2>
        <Text style={styles.card1}></Text>
        <Text style={styles.card1}></Text>
        <Text style={styles.card1}></Text>
      </ScrollView>

      {/* Vertical cards */}
      <View style={styles.mainCards}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View>
            <Text style={{fontSize: 40, color: '#1D2741', fontWeight: 'bold'}}>
              Found
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: '#1D2741',
                fontWeight: 'bold',
                paddingBottom: 50,
              }}>
              40 results
            </Text>
            <Text style={styles.card3}>
              <View>
                <Shadow>
                  <Iconimg5
                    source={require('../Screens/images/food1-modified.png')}
                  />
                </Shadow>
                <Text
                  style={{
                    color: '#1D2741',
                    fontSize: 20,
                    marginTop: 30,
                    marginLeft: 40,
                    fontWeight: 'bold',
                  }}>
                  Pork Dimsum
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    marginLeft: 38,
                    letterSpacing: 1,
                    marginTop: 20,
                  }}>
                  Steamed dimsum
                </Text>
                <Text style={{color: 'grey', marginLeft: 42, letterSpacing: 1}}>
                  with pork spices
                </Text>
                <View
                  style={{flexDirection: 'row', marginLeft: 55, marginTop: 10}}>
                  <Text style={{color: '#FFAE42', fontSize: 35}}>$</Text>
                  <Text style={{color: '#1D2741', fontSize: 35}}>4.10</Text>
                </View>
              </View>
            </Text>
          </View>

          <Text style={styles.card4}>
            <View>
              <Iconimg5
                style={{elevation: 50}}
                source={require('../Screens/images/food2.png')}
              />
              <Text
                style={{
                  color: '#1D2741',
                  fontSize: 20,
                  marginTop: 30,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                Shrimp fried rice
              </Text>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 20,
                  letterSpacing: 1,
                  marginTop: 20,
                }}>
                Fried rice with shrimps
              </Text>
              <Text style={{color: 'grey', marginLeft: 42, letterSpacing: 1}}>
                and spicy sauce
              </Text>
              <View
                style={{flexDirection: 'row', marginLeft: 55, marginTop: 10}}>
                <Text style={{color: '#FFAE42', fontSize: 35}}>$</Text>
                <Text style={{color: '#1D2741', fontSize: 35}}>5.30</Text>
              </View>
            </View>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View>
            <Text style={styles.card6}>
              <View>
                <Iconimg5
                  style={{elevation: 50}}
                  source={require('../Screens/images/three.png')}
                />
                <Text
                  style={{
                    color: '#1D2741',
                    fontSize: 20,
                    marginTop: 30,
                    marginLeft: 40,
                    fontWeight: 'bold',
                  }}>
                  Pork Dimsum
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    marginLeft: 38,
                    letterSpacing: 1,
                    marginTop: 20,
                  }}>
                  Steamed dimsum
                </Text>
                <Text style={{color: 'grey', marginLeft: 42, letterSpacing: 1}}>
                  with pork spices
                </Text>
                <View
                  style={{flexDirection: 'row', marginLeft: 55, marginTop: 10}}>
                  <Text style={{color: '#FFAE42', fontSize: 35}}>$</Text>
                  <Text style={{color: '#1D2741', fontSize: 35}}>4.10</Text>
                </View>
              </View>
            </Text>
          </View>

          <Text style={styles.card5}>
            <View>
              <Iconimg5
                style={{elevation: 50}}
                source={require('../Screens/images/spicypoke.png')}
              />
              <Text
                style={{
                  color: '#1D2741',
                  fontSize: 20,
                  marginTop: 30,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                Shrimp fried rice
              </Text>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 20,
                  letterSpacing: 1,
                  marginTop: 20,
                }}>
                Fried rice with shrimps
              </Text>
              <Text style={{color: 'grey', marginLeft: 42, letterSpacing: 1}}>
                and spicy sauce
              </Text>
              <View
                style={{flexDirection: 'row', marginLeft: 55, marginTop: 10}}>
                <Text style={{color: '#FFAE42', fontSize: 35}}>$</Text>
                <Text style={{color: '#1D2741', fontSize: 35}}>5.30</Text>
              </View>
            </View>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View>
            <Text style={styles.card6}>
              <View>
                <Iconimg5
                  style={{elevation: 50}}
                  source={require('../Screens/images/food1-modified.png')}
                />
                <Text
                  style={{
                    color: '#1D2741',
                    fontSize: 20,
                    marginTop: 30,
                    marginLeft: 40,
                    fontWeight: 'bold',
                  }}>
                  Pork Dimsum
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    marginLeft: 38,
                    letterSpacing: 1,
                    marginTop: 20,
                  }}>
                  Steamed dimsum
                </Text>
                <Text style={{color: 'grey', marginLeft: 42, letterSpacing: 1}}>
                  with pork spices
                </Text>
                <View
                  style={{flexDirection: 'row', marginLeft: 55, marginTop: 10}}>
                  <Text style={{color: '#FFAE42', fontSize: 35}}>$</Text>
                  <Text style={{color: '#1D2741', fontSize: 35}}>4.10</Text>
                </View>
              </View>
            </Text>
          </View>

          <Text style={styles.card5}>
            <View>
              <Iconimg5
                style={{elevation: 50}}
                source={require('../Screens/images/food2.png')}
              />
              <Text
                style={{
                  color: '#1D2741',
                  fontSize: 20,
                  marginTop: 30,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                Shrimp fried rice
              </Text>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 20,
                  letterSpacing: 1,
                  marginTop: 20,
                }}>
                Fried rice with shrimps
              </Text>
              <Text style={{color: 'grey', marginLeft: 42, letterSpacing: 1}}>
                and spicy sauce
              </Text>
              <View
                style={{flexDirection: 'row', marginLeft: 55, marginTop: 10}}>
                <Text style={{color: '#FFAE42', fontSize: 35}}>$</Text>
                <Text style={{color: '#1D2741', fontSize: 35}}>5.30</Text>
              </View>
            </View>
          </Text>
        </View>
      </View>
    </ScrollView>
    // <Text>Hello</Text>
  );
};
export default Home;

const Iconimg1 = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;
const Iconimg = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 300px;
`;
const Heading = styled.Text`
  color: black;
  font-size: 38px;
  font-weight: 700;
  margin-left: 20px;
`;
const Search1 = styled.View`
  margin-left: 20px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
`;
const Search2 = styled.View`
  background-color: orange;
  width: 60px;
  margin-left: 20px;
  border-radius: 10px;
`;
const Iconimg3 = styled.Image`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
`;
const Iconimg4 = styled.Image`
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 15px;
`;
const Horicard1 = styled.Text`
  font-size: 20px;
  color: white;
  padding-top: 16px;
  padding-left: 35px;
`;
const Horicard2 = styled.Text`
  font-size: 20px;
  color: black;
  padding-top: 18px;
  padding-left: 25px;
`;
const Iconimg5 = styled.Image`
  width: 120px;
  height: 120px;
  margin-left: 30px;
  margin-top: -50px;
`;
const Shadow = styled.View`
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
`;

const Iconimg6 = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 500px;
`;

const card1 = styled.Text``;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    // paddingTop: 80,
  },
  headingText: {
    color: '#1D2741',
    fontSize: 45,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  searchBar: {
    backgroundColor: '#ff0',
    fontWeight: '300',
    backgroundColor: '#EBECF0',
  },
  searchBarContainer: {
    borderRadius: 10,
    borderColor: '#EBECF0',
    backgroundColor: '#EBECF0',
    borderWidth: 1,
    flexDirection: 'row',
    width: 300,
    height: 60,
    marginTop: 40,
    marginLeft: 20,
  },
  card1: {
    borderWidth: 1,
    borderColor: '#FFA113',
    marginTop: 20,
    height: 60,
    width: 150,
    // backgroundColor: '#EBECF0',
    backgroundColor: '#fff',
    borderRadius: 10,
    // elevation: 5,
    marginLeft: 20,
    // backgroundColor: '#FFA113',
  },
  card: {
    marginTop: 20,
    height: 60,
    width: 150,
    // backgroundColor: '#fff',
    borderRadius: 10,
    // elevation: 10,
    marginLeft: 20,
    backgroundColor: '#FFA113',
  },
  mainCards: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 10,
    // marginBottom: 80,
  },
  card2: {
    flex: 1,
    height: 250,
    width: 150,
    // backgroundColor: '#EBECF0',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    marginRight: 10,
    justifyContent: 'center',
  },
  card3: {
    flex: 2,
    height: 250,
    width: 185,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    marginRight: 10,
  },
  card4: {
    flex: 2,
    height: 250,
    width: 185,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    marginRight: 10,
    marginTop: 70,
  },
  card5: {
    flex: 2,
    height: 250,
    width: 185,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    marginRight: 10,
    marginTop: -20,
  },

  card6: {
    flex: 2,
    height: 250,
    width: 185,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    marginRight: 10,
    marginTop: 50,
  },
});
