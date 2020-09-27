import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonContainer from './components/ButtonContainer';
import GameBoard from './components/GameBoard';
import GameScoreCard from './components/GameScoreCard';

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

const reducer = (state, { type, payload }) => {
  //state === { history: [{playerScore: number, computerScore: number, playerChoice: 'rock' || 'scissors' || 'paper', computerChoice: playerChoice: 'rock' || 'scissors' || 'paper'}, ... ]}

  //action === {type: 'choose_rock' || 'choose_paper' || 'choose_scissors' || 'reset_game', payload: 1 || 2 ||3}
  switch (type) {
    case 'choose_rock':
      return payload === ROCK
        ? {
            ...state,
            history: [
              {
                playerChoice: ROCK,
                computerChoice: payload,
                playerScore: state.playerScore,
                computerScore: state.computerScore,
                gameResult: 'TIE',
              },
              ...state.history,
            ],
          }
        : payload === PAPER
        ? {
            ...state,
            history: [
              {
                playerChoice: ROCK,
                computerChoice: payload,
                playerScore: state.playerScore,
                computerScore: state.computerScore + 1,
                gameResult: 'Computer Wins',
              },
              ...state.history,
            ],
            playerScore: state.playerScore,
            computerScore: state.computerScore + 1,
          }
        : {
            ...state,
            history: [
              {
                playerChoice: ROCK,
                computerChoice: payload,
                playerScore: state.playerScore + 1,
                computerScore: state.computerScore,
                gameResult: 'Player Wins',
              },
              ...state.history,
            ],
            playerScore: state.playerScore + 1,
            computerScore: state.computerScore,
          };
    case 'choose_paper':
      return payload === ROCK
        ? {
            ...state,
            history: [
              {
                playerChoice: PAPER,
                computerChoice: payload,
                playerScore: state.playerScore + 1,
                computerScore: state.computerScore,
                gameResult: 'Player Wins',
              },
              ...state.history,
            ],
            playerScore: state.playerScore + 1,
            computerScore: state.computerScore,
          }
        : payload === PAPER
        ? {
            ...state,
            history: [
              {
                playerChoice: PAPER,
                computerChoice: payload,
                playerScore: state.playerScore,
                computerScore: state.computerScore,
                gameResult: 'TIE',
              },
              ...state.history,
            ],
          }
        : {
            ...state,
            history: [
              {
                playerChoice: PAPER,
                computerChoice: payload,
                playerScore: state.playerScore,
                computerScore: state.computerScore + 1,
                gameResult: 'Computer Wins',
              },
              ...state.history,
            ],
            playerScore: state.playerScore,
            computerScore: state.computerScore + 1,
          };
    case 'choose_scissors':
      return payload === ROCK
        ? {
            ...state,
            history: [
              {
                playerChoice: SCISSOR,
                computerChoice: payload,
                playerScore: state.playerScore,
                computerScore: state.computerScore + 1,
                gameResult: 'Computer Wins',
              },
              ...state.history,
            ],
            playerScore: state.playerScore,
            computerScore: state.computerScore + 1,
          }
        : payload === PAPER
        ? {
            ...state,
            history: [
              {
                playerChoice: SCISSOR,
                computerChoice: payload,
                playerScore: state.playerScore + 1,
                computerScore: state.computerScore,
                gameResult: 'Player Wins',
              },
              ...state.history,
            ],
            playerScore: state.playerScore + 1,
            computerScore: state.computerScore,
          }
        : {
            ...state,
            history: [
              {
                playerChoice: SCISSOR,
                computerChoice: payload,
                playerScore: state.playerScore,
                computerScore: state.computerScore,
                gameResult: 'TIE',
              },
              ...state.history,
            ],
          };
    case 'reset_game':
      return { ...state, history: [] };
  }
};

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, {
    playerScore: 0,
    computerScore: 0,
    history: [],
  });

  const { playerScore, computerScore, history } = state;

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flex: 1,
        }}
      >
        {history.length > 0 ? (
          <FlatList
            horizontal
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    margin: 5,
                    borderColor: 'black',
                    justifyContent: 'center',
                  }}
                >
                  <Text>Player: {item.playerChoice}</Text>
                  <Text>Computer: {item.computerChoice}</Text>
                  <Text>Player Score: {item.playerScore}</Text>
                  <Text>Computer Score: {item.computerScore}</Text>
                  <Text>Game Result: {item.gameResult}</Text>
                </View>
              );
            }}
          />
        ) : null}
      </View> */}
      <GameBoard data={history} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('History', { games: history });
        }}
      >
        <GameScoreCard
          playerScore={playerScore}
          computerScore={computerScore}
        />
      </TouchableOpacity>

      <ButtonContainer
        action={[
          () => {
            dispatch({
              type: 'choose_rock',
              payload: Math.floor(Math.random() * 3) + 1,
            });
          },
          () => {
            dispatch({
              type: 'choose_paper',
              payload: Math.floor(Math.random() * 3) + 1,
            });
          },
        ]}
        choosePaper={() =>
          dispatch({
            type: 'choose_scissors',
            payload: Math.floor(Math.random() * 3) + 1,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  //   buttonContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     backgroundColor: 'red',
  //     paddingVertical: 30,
  //   },
});

export default HomeScreen;
