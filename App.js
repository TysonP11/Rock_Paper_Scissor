import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HistoryScreen from './src/screens/HistoryScreen';

import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    History: HistoryScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Welcome',
    },
  }
);

export default createAppContainer(navigator);
