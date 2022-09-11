import { AxiosError } from 'axios';

export const HISTORY_DATE_SLICE_ALIAS = 'historyDate';
export const SECTION_SLICE_ALIAS = 'section';

export interface IHistoryDatePeriod {
  time: number;
  text: string;
}

export interface IHitoryDateSlice {
  historyDate: IHistoryDateItem | null;
  section: string;
  sections: any;
  loading: boolean;
  error: AxiosError | null;
}

export interface IHistoryDateItem {
  first: {
    temporary_period_start: number;
    temporary_period_end: number;
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
  second: {
    temporary_period_start: number;
    temporary_period_end: number;
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
  third: {
    temporary_period_start: number;
    temporary_period_end: number;
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
  fourth: {
    temporary_period_start: number;
    temporary_period_end: number;
    science: Array<IHistoryDatePeriod>;
    movie: Array<IHistoryDatePeriod>;
    literature: Array<IHistoryDatePeriod>;
    music: Array<IHistoryDatePeriod>;
  };
}
