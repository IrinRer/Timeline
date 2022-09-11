import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { HISTORY_DATE_SLICE_ALIAS, IHitoryDateSlice } from './types';
import { fetchHistoryDateAction } from './thunk';

const initialState: IHitoryDateSlice = {
  historyDate: null,
  section: 'science',
  loading: false,
  error: null
};

export const dateHistorySlice = createSlice({
  name: HISTORY_DATE_SLICE_ALIAS,
  initialState,
  reducers: {
    setSection: (store, action: PayloadAction<string>) => {
      store.section = action.payload;
    }
  },
  extraReducers: {
    [fetchHistoryDateAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchHistoryDateAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>,
    ) => {
      state.historyDate = payload;
      state.loading = false;
    },
    [fetchHistoryDateAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
     state.historyDate = null;
     state.loading = false;
     state.error = payload
    },
  },
});

export const { setSection } = dateHistorySlice.actions;
export default dateHistorySlice.reducer;