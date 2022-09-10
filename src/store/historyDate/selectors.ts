import { RootState } from 'store';

export const getDateHistoryScience = (state: RootState) => {
  return [
    state.dateHistory.historyDate?.first.science,
    state.dateHistory.historyDate?.second.science,
    state.dateHistory.historyDate?.third.science,
    state.dateHistory.historyDate?.fourth.science,
  ];
};

export const getDateHistoryMusic = (state: RootState) => {
  return [
    state.dateHistory.historyDate?.first.music,
    state.dateHistory.historyDate?.second.music,
    state.dateHistory.historyDate?.third.music,
    state.dateHistory.historyDate?.fourth.music,
  ];
};

export const getDateHistoryFirstPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.first;

export const getTemporaryPeriod = (state: RootState) => {
  return [
    {
      period: `${state.dateHistory.historyDate?.first.temporary_period_start} ${state.dateHistory.historyDate?.first.temporary_period_end}`,
      start: state.dateHistory.historyDate?.first.temporary_period_start,
      end: state.dateHistory.historyDate?.first.temporary_period_end,
    },
    {
      period: `${state.dateHistory.historyDate?.second.temporary_period_start} ${state.dateHistory.historyDate?.second.temporary_period_end}`,
      start: state.dateHistory.historyDate?.second.temporary_period_start,
      end: state.dateHistory.historyDate?.second.temporary_period_end,
    },
    {
      period: `${state.dateHistory.historyDate?.third.temporary_period_start} ${state.dateHistory.historyDate?.third.temporary_period_end}`,
      start: state.dateHistory.historyDate?.third.temporary_period_start,
      end: state.dateHistory.historyDate?.third.temporary_period_end,
    },
    {
      period: `${state.dateHistory.historyDate?.fourth.temporary_period_start} ${state.dateHistory.historyDate?.fourth.temporary_period_end}`,
      start: state.dateHistory.historyDate?.fourth.temporary_period_start,
      end: state.dateHistory.historyDate?.fourth.temporary_period_end,
    },
  ];
};

export const getDateHistorySecondPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.second;

export const getDateHistoryThirdPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.third;

export const getDateHistoryFourthPeriod = (state: RootState) =>
  state.dateHistory.historyDate?.fourth;
