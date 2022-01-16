import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types';
import { getIssueList } from '../../../api/issue';
import { formatIssueList } from '../logics/formatIssueList';
import { InputValues } from '../../../pages/Home/types';
import { Issue } from '../../../types/issue';
import { customizeError } from '../../logics/customizeError';

export const fetchIssueList = createAsyncThunk<Issue[], InputValues, ThunkAPI>('issue/fetchIssueList', async (getIssueListParam, { rejectWithValue }) => {
  try {
    const { data } = await getIssueList(getIssueListParam);
    return formatIssueList(data);
  } catch (error) {
    return rejectWithValue(customizeError(error));
  }
});
