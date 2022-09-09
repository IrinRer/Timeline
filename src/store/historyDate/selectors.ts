import { RootState } from "store";

export const getDateHistory = (state: RootState) => state.dateHistory.historyDate;