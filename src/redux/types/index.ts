import { AppDispatch, RootState } from '../store';

export type ThunkAPI = {
  dispatch: AppDispatch;
  rejectValue: unknown;
  state: RootState;
};
