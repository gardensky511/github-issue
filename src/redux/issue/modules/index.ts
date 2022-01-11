import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssueState } from '../types';
import { fetchIssueList } from '../thunk';
import { INITIAL_INPUT_VALUES } from '../../../pages/Home/const';

const initialState: IssueState = {
  owner: INITIAL_INPUT_VALUES.OWNER,
  repository: INITIAL_INPUT_VALUES.REPOSITORY,
  issueList: [],
  currenPageNumber: 1,
};

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    setOwner: (state, { payload }: PayloadAction<string>) => {
      state.owner = payload;
    },
    setRepository: (state, { payload }: PayloadAction<string>) => {
      state.repository = payload;
    },
    setCurrentPageNumber: (state, { payload }: PayloadAction<number>) => {
      state.currenPageNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssueList.fulfilled, (state, { payload }) => {
      state.issueList = payload;
    });
  },
});

export const { setOwner, setRepository, setCurrentPageNumber } = issueSlice.actions;
export default issueSlice.reducer;
