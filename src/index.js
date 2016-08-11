import React from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import configureStore from './store/configure-store';

const store = configureStore({});

const Root = () => {
  return (
    <Provider store={ store }>
      <Text>{'Hello'}</Text>
    </Provider>
  );
};

export default Root;
