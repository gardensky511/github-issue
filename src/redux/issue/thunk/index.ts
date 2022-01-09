import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types';
import { getIssueList } from '../../../api/issue';
import { GetIssueListParam, Issue } from '../../../types/issue';

export const fetchIssueList = createAsyncThunk<Issue[], GetIssueListParam, ThunkAPI>('issue/fetchIssueList', async (getIssueListParam, { rejectWithValue }) => {
  try {
    const { data } = await getIssueList(getIssueListParam);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
