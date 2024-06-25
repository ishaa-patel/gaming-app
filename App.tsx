/* eslint-disable prettier/prettier */
import React from 'react';
import { AuthProvider } from './app/providers/AuthContextProvider';
import { AppMainNav } from './app/navigation';
import { store } from './app/redux/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
    <AuthProvider>
      <AppMainNav />
    </AuthProvider>
    </Provider>
  );
};

export default App;
