import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChoiceOption = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.action} activeOpacity={0.1}>
        <Image style={styles.logo} source={props.path} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
});

export default ChoiceOption;
