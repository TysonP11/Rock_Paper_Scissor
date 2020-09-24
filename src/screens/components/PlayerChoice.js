import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlayerChoice = (props) => {
  return (
    <View style={[styles.container]}>
      {/* <Text
        style={{
          fontSize: 20,
        }}
      >
        {props.player}
      </Text> */}
      <Image
        source={props.choice}
        style={{
          width: 120,
          height: 120,
          //marginTop: 20,
        }}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
});

export default PlayerChoice;
