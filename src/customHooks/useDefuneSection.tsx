import { Section } from 'constants/common';
import {
  getDateHistoryLiterature,
  getDateHistoryMovie,
  getDateHistoryMusic,
  getDateHistoryScience,
  getSection,
} from 'store/historyDate/selectors';
import { useAppSelector } from './redux/useAppSelector';

export const useDefuneSection = () => {
  const section = useAppSelector(getSection);
  const sectionSience = useAppSelector(getDateHistoryScience);
  const sectionMusic = useAppSelector(getDateHistoryMusic);
  const sectionMovie = useAppSelector(getDateHistoryMovie);
  const sectionLiterature = useAppSelector(getDateHistoryLiterature);

  switch (section) {
    case Section.SCIENCE: {
      return sectionSience;
    }
    case Section.LITERATURE: {
      return sectionLiterature;
    }

    case Section.MOVIE: {
      return sectionMovie;
    }
    case Section.MUSIC: {
      return sectionMusic;
    }
    default: {
      return null;
    }
  }
};
