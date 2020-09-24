import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoiceOption from './ChoiceOption';

const ButtonContainer = (props) => {
  return (
    <View style={styles.container}>
      <ChoiceOption
        title='choose_rock'
        action={props.action[0]}
        path={require('../../../assets/rock.png')}
      />
      <ChoiceOption
        title='choose_paper'
        action={props.action[1]}
        path={require('../../../assets/paper.png')}
      />
      <ChoiceOption
        title='choose_scissors'
        action={props.choosePaper}
        path={require('../../../assets/scissors.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginBottom: 50,
    //flex: 1,
    padding: 5,
  },
});

export default ButtonContainer;
