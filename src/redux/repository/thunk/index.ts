import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../types';
import { GetRepositoryDataParam, RepositoryData } from '../../../types/repository';
import { getRepositoryData } from '../../../api/repository';
import { customizeError } from '../../logics/customizeError';

export const fetchRepositoryData = createAsyncThunk<RepositoryData, GetRepositoryDataParam, ThunkAPI>(
  'repository/fetchRepositoryData',
  async (params, { rejectWithValue }) => {
    try {
      const {
        data: { full_name, open_issues_count },
      } = await getRepositoryData(params);
      return { full_name, open_issues_count };
    } catch (error) {
      return rejectWithValue(customizeError(error));
    }
  },
);
