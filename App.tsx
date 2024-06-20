/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { AuthProvider } from './app/providers/AuthContextProvider';
import { AppMainNav } from './app/navigation';


const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppMainNav />
      </Provider>
    </AuthProvider>
  );
};

export default App;
