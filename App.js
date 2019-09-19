import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import AppContainer from './AppContainer';
import store from './store';
import AppTheme from './AppTheme';
import AppHeader from './AppHeader'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={AppTheme}>
      <AppContainer />
    </ThemeProvider>
  </Provider>
);



export default App;


