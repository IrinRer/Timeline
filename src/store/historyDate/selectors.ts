import { RootState } from 'store';

export const getDateHistory = (state: RootState) =>
  state.dateHistory.historyDate;

export const getDateHistoryFirstPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.first;

export const getDateHistorySecondPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.second;

export const getDateHistoryThirdPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.third;

export const getDateHistoryFourthPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.fourth;
