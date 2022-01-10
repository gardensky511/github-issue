import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import issueReducer from './issue/modules';
import repositoryReducer from './repository/modules';

export const store = configureStore({
  reducer: {
    issue: issueReducer,
    repository: repositoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // redux-thunk を使う action は serializableCheck しないように設定
      serializableCheck: { ignoredActions: ['issue/fetchIssueList/fulfilled', 'issue/fetchIssueList/rejected'] },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
