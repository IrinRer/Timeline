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

export const getDateHistoryMovie = (state: RootState) => {
  return [
    state.dateHistory.historyDate?.first.movie,
    state.dateHistory.historyDate?.second.movie,
    state.dateHistory.historyDate?.third.movie,
    state.dateHistory.historyDate?.fourth.movie,
  ];
};

export const getDateHistoryLiterature = (state: RootState) => {
  return [
    state.dateHistory.historyDate?.first.literature,
    state.dateHistory.historyDate?.second.literature,
    state.dateHistory.historyDate?.third.literature,
    state.dateHistory.historyDate?.fourth.literature,
  ];
};

export const getTemporaryPeriod = (state: RootState) => {
  return [
    {
      period: [
        state.dateHistory.historyDate?.first.temporary_period_start,
        state.dateHistory.historyDate?.first.temporary_period_end,
      ],
      start: state.dateHistory.historyDate?.first.temporary_period_start,
      end: state.dateHistory.historyDate?.first.temporary_period_end,
    },
    {
      period: [
        state.dateHistory.historyDate?.second.temporary_period_start,
        state.dateHistory.historyDate?.second.temporary_period_end,
      ],
      start: state.dateHistory.historyDate?.second.temporary_period_start,
      end: state.dateHistory.historyDate?.second.temporary_period_end,
    },
    {
      period: [
        state.dateHistory.historyDate?.third.temporary_period_start,
        state.dateHistory.historyDate?.third.temporary_period_end,
      ],
      start: state.dateHistory.historyDate?.third.temporary_period_start,
      end: state.dateHistory.historyDate?.third.temporary_period_end,
    },
    {
      period: [
        state.dateHistory.historyDate?.fourth.temporary_period_start,
        state.dateHistory.historyDate?.fourth.temporary_period_end,
      ],
      start: state.dateHistory.historyDate?.fourth.temporary_period_start,
      end: state.dateHistory.historyDate?.fourth.temporary_period_end,
    },
  ];
};

export const getSection = (state: RootState) => state.dateHistory.section;
export const getSections = (state: RootState) => state.dateHistory.sections;
