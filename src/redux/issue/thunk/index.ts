import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types';
import { getIssueList } from '../../../api/issue';
import { GetIssueListParam, Issue } from '../../../types/issue';
import { formatIssueList } from '../logics/formatIssueList';

export const fetchIssueList = createAsyncThunk<Issue[], GetIssueListParam, ThunkAPI>('issue/fetchIssueList', async (getIssueListParam, { rejectWithValue }) => {
  try {
    const { data } = await getIssueList(getIssueListParam);
    return formatIssueList(data);
  } catch (error) {
    return rejectWithValue(error);
  }
});
