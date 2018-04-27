import React from 'react';
import { Provider } from 'react-redux';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme';
import { hot } from 'react-hot-loader';
import App from '../App';
import configureStore from '../../store';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <UWPThemeProvider
      theme={getTheme({
        themeName: 'light',
        accent: '#0078D7',
        useFluentDesign: true,
      })}
    >
      <App />
    </UWPThemeProvider>
  </Provider>
);

export default hot(module)(Root);
