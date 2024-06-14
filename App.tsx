/* eslint-disable prettier/prettier */
import React from 'react';
import { AuthProvider } from './app/providers/AuthContextProvider';
import { AppMainNav } from './app/navigation';


const App = () => {
  return (
    <AuthProvider>
      <AppMainNav />
    </AuthProvider>
  );
};

export default App;
