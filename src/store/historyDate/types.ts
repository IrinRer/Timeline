import { AxiosError } from 'axios';

export const HISTORY_DATE_SLICE_ALIAS = 'historyDate';

export interface IHistoryDateFirstPeriod {
  2007: string;
  2008: string;
  2009: string;
  2010: string;
}

export interface IHistoryDateSecondPeriod {
  2011: string;
  2012: string;
  2013: string;
  2014: string;
}

export interface IHistoryDateThirdPeriod {
  2015: string;
  2016: string;
  2017: string;
  2018: string;
}

export interface IHistoryDateFourthPeriod {
  2019: string;
  2020: string;
  2021: string;
  2022: string;
}

export interface IHitoryDateSlice {
  historyDate: IHistoryDateItem | null;
  loading: boolean;
  error: AxiosError | null;
}

export interface IHistoryDateItem {
  first: {
    science: Array<IHistoryDateFirstPeriod>;
    movie: Array<IHistoryDateFirstPeriod>;
    literature: Array<IHistoryDateFirstPeriod>;
    music: Array<IHistoryDateFirstPeriod>;
  };
  second: {
    science: Array<IHistoryDateSecondPeriod>;
    movie: Array<IHistoryDateSecondPeriod>;
    literature: Array<IHistoryDateSecondPeriod>;
    music: Array<IHistoryDateSecondPeriod>;
  };
  third: {
    science: Array<IHistoryDateThirdPeriod>;
    movie: Array<IHistoryDateThirdPeriod>;
    literature: Array<IHistoryDateThirdPeriod>;
    music: Array<IHistoryDateThirdPeriod>;
  };
  fourth: {
    science: Array<IHistoryDateFourthPeriod>;
    movie: Array<IHistoryDateFourthPeriod>;
    literature: Array<IHistoryDateFourthPeriod>;
    music: Array<IHistoryDateFourthPeriod>;
  };
}
