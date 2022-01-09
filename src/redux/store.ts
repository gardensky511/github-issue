import { configureStore } from '@reduxjs/toolkit';
import issueReducer from './issue/modules';

export const store = configureStore({
  reducer: {
    issue: issueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
