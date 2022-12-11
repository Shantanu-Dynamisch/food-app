import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const FoodPage = () => {
  return (
    <ScrollView style={styles.body}>
      {/* Top icons */}
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Iconimg1 source={require('../images/back-arrow-2.png')}></Iconimg1>
        <Details>Details</Details>
        <Iconimg source={require('../images/heart.png')} />
      </View>

      {/* Image */}
      <Iconimg2 source={require('../images/three.png')}></Iconimg2>
      {/* Card View */}
      <Card>
        <Text style={styles.buttText}>
          - {} 1 {} +
        </Text>
        <Text style={styles.buttcard}>⭐4.6</Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 2,
            marginTop: 20,
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: '#1D2741',
              fontSize: 38,
              flex: 2,
              fontWeight: 'bold',
            }}>
            Egg noddles{} {} {} {} {} with spicy chicken
          </Text>
          <Text
            style={{
              color: '#1D2741',
              fontSize: 30,
              marginTop: 27,
              color: '#FFAE42',
            }}>
            $
          </Text>
          <Text
            style={{
              color: '#1D2741',
              fontSize: 35,
              marginRight: 20,
              marginTop: 20,
              fontWeight: 'bold',
            }}>
            {}
            {} 5.40
          </Text>
        </View>
      </Card>
      <View style={styles.card2}>
        <Text style={{color: '#d3d3d3', fontSize: 20, marginLeft: 20,marginTop:-20}}>
          Egg noodles with spicy chiken, fried egg and provencal herbs, Served
          with a slice of lemon {} {} {} and basil leaves.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 2,
            marginTop: 10,
            marginLeft: 20,
          }}>
          <Text style={{color: '#FFAE42', fontSize: 18, fontWeight: 'bold'}}>
            Proteins
          </Text>
          <Text style={{color: '#d3d3d3', marginTop: 5}}>
            ______________________________________________
          </Text>
          <Text style={{color: '#1D2741', fontSize: 18, fontWeight: 'bold'}}>
            4.57g
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 2,
            // marginTop: -80,
            marginLeft: 20,
          }}>
          <Text style={{color: '#FFAE42', fontSize: 18, fontWeight: 'bold'}}>
            Fats
          </Text>
          <Text style={{color: '#d3d3d3'}}>
            ___________________________________________________
          </Text>
          <Text style={{color: '#1D2741', fontSize: 18, fontWeight: 'bold'}}>
            8.96g
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 2,
            // marginTop: -80,
            marginLeft: 20,
          }}>
          <Text style={{color: '#FFAE42', fontSize: 18, fontWeight: 'bold'}}>
            Carbohydrates
          </Text>
          <Text style={{color: '#d3d3d3'}}>
            ____________________________________
          </Text>
          <Text style={{color: '#1D2741', fontSize: 18, fontWeight: 'bold'}}>
            20.41g
          </Text>
        </View>
        <Text style={{color: '#1D2741',fontSize:20,marginLeft:20}}>Ingredients</Text>

        <View style={{flexDirection: 'row', marginBottom: 30}}>
          <Text style={styles.card3}>
            <Iconimg6 source={require('../images/chikenn.jpg')}></Iconimg6>
            
          </Text>
          <Text style={styles.card3}>
            <Iconimg6 source={require('../images/beacann.jpeg')}></Iconimg6>
          </Text>
          <Text style={styles.card3}>
            <Iconimg6 source={require('../images/eggg.jpeg')}></Iconimg6>
          </Text>
          <Text style={styles.card3}>
            <Iconimg6 source={require('../images/lemonn.jpeg')}></Iconimg6>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default FoodPage;

// const ScrollView = styled.ScrollView`
//   background-color: white;
//   display:flex;
//   flex:1;
// `;

const Iconimg6 = styled.Image`
  width: 50px;
  height: 50px;
`;
const Iconimg1 = styled.Image`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-top: 10px;
`;
const Iconimg = styled.Image`
  width: 30px;
  height: 30px;
  margin-left: 130px;
  margin-top: 10px;
`;
const Iconimg2 = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 40px;
  margin-left: 110px;
  margin-bottom: 40px;
`;
const Details = styled.Text`
    color:black
    margin-top: 10px;
    margin-left: 130px;
    font-size: 20px;
    font-weight:bold;
`;

const Card = styled.View`
  background-color: white;
  height: 200px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;
const Card2 = styled.View`
  background-color: white;
  height: 200px;
`;
const ButtonCard = styled.Text`
    height: 20px;
    width: 50px,
    background-color: grey,
    margin-left: 40px,
    border-radius: 10px,
    color: black,
    font-weight: 600,
    padding-left: 5px,
`;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#d3d3d3',
    // paddingTop: 80,
  },
  card: {
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  buttText: {
    width: 150,
    height: 50,
    backgroundColor: '#FFAE42',
    borderRadius: 45,
    marginLeft: 135,
    marginTop: -25,
    color: '#ffff',
    paddingLeft: 46,
    paddingTop: 13,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  buttcard: {
    height: 20,
    width: 50,
    backgroundColor: '#d3d3d3',
    marginLeft: 40,
    borderRadius: 10,
    color: '#1D2741',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  card2: {
    backgroundColor: '#ffff',
    height: 350,
    // marginTop: -30,
  },
  card3: {
    height: 60,
    width: 60,
    color: '#1D2741',
    marginLeft: 40,
  },
});
