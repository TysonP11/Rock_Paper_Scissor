import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import GameDetail from './components/GameDetail';
import HistoryTop from './components/HistoryTop';

const HistoryScreen = ({ navigation }) => {
  const history = navigation.getParam('games');

  return (
    <View style={styles.container}>
      {history.length === 0 ? null : (
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Games Stat
          </Text>
          <HistoryTop info={history} />
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Games Details
          </Text>
        </View>
      )}

      {history.length === 0 ? (
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 15,
              marginVertical: 20,
              marginHorizontal: 10,
              textAlign: 'center',
            }}
          >
            How about you play a few games first?
          </Text>
          <Image source={require('../../assets/404.gif')} />
        </View>
      ) : (
        <View style={styles.gamesDetail}>
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return <GameDetail info={item} />;
            }}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  gamesDetail: {
    borderWidth: 2,
    borderRadius: 10,
    width: 96 + '%',
    marginVertical: 10,
  },
});
