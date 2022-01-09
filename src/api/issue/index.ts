import { AXIOS, END_POINT } from '../const';
import { GetIssueListParam, Issue } from '../../types/issue';

export const getIssueList = (getIssueListParam: GetIssueListParam) => {
  return AXIOS.get<Issue[]>(END_POINT.GET_ISSUE_LIST(getIssueListParam));
};
