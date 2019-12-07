import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Screen1 from './screen_1';
import Screen2 from './screen_2';

const MyDrawerNavigator = createDrawerNavigator({
  Screen_1: {
    screen: Screen1,
  },
  Screen_2: {
    screen: Screen2,
  },
});

export default createAppContainer(MyDrawerNavigator);