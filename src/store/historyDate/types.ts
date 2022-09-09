import { AxiosError } from 'axios';

export const HISTORY_DATE_SLICE_ALIAS = 'historyDate';

export interface IHistoryDatePeriod {
  time: number;
  text: string;
}

export interface IHitoryDateSlice {
  historyDate: IHistoryDateItem | null;
  loading: boolean;
  error: AxiosError | null;
}

export interface IHistoryDateItem {
  first: {
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
  second: {
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
  third: {
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
  fourth: {
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
}
