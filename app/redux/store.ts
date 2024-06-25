// src/store/store.ts
import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
