import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, colors } from 'react-native-elements';
import { HomePage } from './containers'
import store from './store';
import { Platform } from 'react-native';

const theme = {
  ActivityIndicator: {
    color: '#00FF00'
  },
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </Provider>
);

export default App;


