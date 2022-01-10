import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const issueSelector = (state: RootState) => state.issue;

export const issueListSelector = createSelector(issueSelector, (issue) => issue.issueList);
