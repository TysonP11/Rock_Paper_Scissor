import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const GameDetail = ({ info }) => {
  console.log(info);
  const getImagePath = (choice) => {
    if (choice === 1) {
      return require('../../../assets/rock.png');
    } else if (choice === 2) {
      return require('../../../assets/paper.png');
    } else return require('../../../assets/scissors.png');
  };

  const getComputerStyle = () => {
    switch (info.gameResult) {
      case 'TIE':
        return styles.defaultStyle;
      case 'Computer Wins':
        return styles.winnerStyle;
      case 'Player Wins':
        return styles.loserStyle;
      default:
        return;
    }
  };

  const getPlayerStyle = () => {
    switch (info.gameResult) {
      case 'TIE':
        return styles.defaultStyle;
      case 'Computer Wins':
        return styles.loserStyle;
      case 'Player Wins':
        return styles.winnerStyle;
      default:
        return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.playerInfo, getPlayerStyle()]}>
        <Image
          style={styles.imageStyle}
          source={getImagePath(info.playerChoice)}
        />
        <Text
          style={{
            left: 30,
            fontWeight: 'bold',
            fontSize: 30,
          }}
        >
          {info.playerScore}
        </Text>
      </View>
      <View style={[styles.playerInfo, getComputerStyle()]}>
        <Text
          style={{
            right: 30,
            fontWeight: 'bold',
            fontSize: 30,
          }}
        >
          {info.computerScore}
        </Text>
        <Image
          style={styles.imageStyle}
          source={getImagePath(info.computerChoice)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  playerInfo: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  winnerStyle: {
    backgroundColor: 'green',
  },
  loserStyle: {
    backgroundColor: 'red',
  },
  defaultStyle: {
    backgroundColor: 'grey',
  },
});

export default GameDetail;
