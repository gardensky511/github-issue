import { createSlice } from '@reduxjs/toolkit';
import { IssueState } from '../types';
import { fetchIssueList } from '../thunk';

const initialState: IssueState = {
  issueList: [],
};

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssueList.fulfilled, (state, { payload }) => {
      state.issueList = payload;
    });
  },
});

export default issueSlice.reducer;
