import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { HISTORY_DATE_SLICE_ALIAS, IHitoryDateSlice } from './types';
import { fetchHistoryDateAction } from './thunk';

const initialState: IHitoryDateSlice = {
  historyDate: [],
  loading: false,
  error: null
};

export const dateHistorySlice = createSlice({
  name: HISTORY_DATE_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHistoryDateAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchHistoryDateAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<any>>,
    ) => {
      state.historyDate = payload;
      state.loading = false;
    },
    [fetchHistoryDateAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
     state.historyDate = [];
     state.loading = false;
     state.error = payload
    },
  },
});

export default dateHistorySlice.reducer;