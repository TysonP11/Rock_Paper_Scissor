import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HistoryTop = ({ info }) => {
  const gamesWon = info[0].playerScore;
  const gamesLost = info[0].computerScore;
  const gamesPlayed = info.length;
  const gamesTied = gamesPlayed - gamesLost - gamesWon;
  const winPercentage = ((gamesWon / gamesPlayed) * 100).toFixed(1);
  const losePercentage = ((gamesLost / gamesPlayed) * 100).toFixed(1);
  const tiePercentage = ((gamesTied / gamesPlayed) * 100).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.individualCard}>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Games Won
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {gamesWon}/{gamesPlayed}{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
            }}
          >
            ({winPercentage}%)
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.individualCard,
          { borderRightWidth: 2, borderLeftWidth: 2 },
        ]}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Games Lost
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {gamesLost}/{gamesPlayed}{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
            }}
          >
            ({losePercentage}%)
          </Text>
        </Text>
      </View>
      <View style={styles.individualCard}>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Games Tied
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {gamesTied}/{gamesPlayed}{' '}
          </Text>
          <Text
            style={{
              fontSize: 17,
            }}
          >
            ({tiePercentage}%)
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default HistoryTop;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    width: 96 + '%',
  },
  individualCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
