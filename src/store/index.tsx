import { configureStore } from '@reduxjs/toolkit';
import DateHistoryReducer from './historyDate/slice';
import { IHitoryDateSlice } from './historyDate/types';

export const store = configureStore({
  reducer: {
    dateHistory: DateHistoryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  dateHistory: IHitoryDateSlice;
};

export type AppDispatch = typeof store.dispatch;
