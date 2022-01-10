import { createSlice } from '@reduxjs/toolkit';
import { RepositoryState } from '../../../types/repository';
import { fetchRepositoryData } from '../thunk';

const initialState: RepositoryState = {
  fullName: '',
  openIssuesCount: 0,
};

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositoryData.fulfilled, (state, { payload }) => {
      state.fullName = payload.full_name;
      state.openIssuesCount = payload.open_issues_count;
    });
  },
});

export default repositorySlice.reducer;
