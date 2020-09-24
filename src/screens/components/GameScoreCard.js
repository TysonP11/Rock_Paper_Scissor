import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameScoreCard = ({ playerScore, computerScore }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        {playerScore} : {computerScore}
      </Text>
    </View>
  );
};

export default GameScoreCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    borderRadius: 20,
  },
  score: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
});
