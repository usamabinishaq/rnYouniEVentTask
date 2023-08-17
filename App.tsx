import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
