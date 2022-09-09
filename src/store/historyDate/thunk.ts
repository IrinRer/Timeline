import { api } from 'network';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { HISTORY_DATE_SLICE_ALIAS } from './types';

export const fetchHistoryDateAction = createAsyncThunk(
  `${HISTORY_DATE_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/data');
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);