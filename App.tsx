/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { AppMainNav } from './app/navigation';
import { AuthProvider, AxiosNetworkProvider } from './app/providers';


const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AxiosNetworkProvider>
          <AppMainNav />
        </AxiosNetworkProvider>
      </Provider>
    </AuthProvider>
  );
};

export default App;
