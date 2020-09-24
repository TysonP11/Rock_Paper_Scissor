import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PlayerChoice from './PlayerChoice';

const GameBoard = (props) => {
  const getImagePath = (choice) => {
    if (choice === 1) {
      return require('../../../assets/rock.png');
    } else if (choice === 2) {
      return require('../../../assets/paper.png');
    } else return require('../../../assets/scissors.png');
  };

  const getContainerStyle = () => {
    if (props.data.length === 0) {
      return styles.containerTieColor;
    } else {
      if (props.data[0].gameResult === 'TIE') {
        return styles.containerTieColor;
      } else if (props.data[0].gameResult === 'Computer Wins') {
        return styles.containerLoseColor;
      } else {
        return styles.containerWinColor;
      }
    }
  };

  const containerStyle = getContainerStyle();

  const playerImagePath =
    props.data.length === 0
      ? require('../../../assets/question.png')
      : getImagePath(props.data[0].playerChoice);

  const computerImagePath =
    props.data.length === 0
      ? require('../../../assets/question.png')
      : getImagePath(props.data[0].computerChoice);

  return (
    <View style={[styles.container, containerStyle]}>
      <Fragment>
        <PlayerChoice player='Computer' choice={computerImagePath} />
        <Text
          style={{
            bottom: 20,
            fontSize: 20,
          }}
        >
          Computer
        </Text>
      </Fragment>
      <Fragment>
        <Text
          style={{
            top: 20,
            fontSize: 20,
          }}
        >
          You
        </Text>
        <PlayerChoice player='You' choice={playerImagePath} />
      </Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    flex: 1,
    //flexDirection: 'row',
    alignItems: 'center',
  },
  containerTieColor: {
    //borderColor: 'black',
    backgroundColor: 'grey',
  },
  containerWinColor: {
    //borderColor: 'green',
    backgroundColor: 'green',
  },

  containerLoseColor: {
    //borderColor: 'red',
    backgroundColor: 'red',
  },
});

export default GameBoard;
