import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import characterReducer from '../components/redux_slices/Character';

export const store = configureStore({
  reducer: {
    character : characterReducer
  },
}, applyMiddleware(thunk))