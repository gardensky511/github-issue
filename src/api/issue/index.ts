import { AXIOS, END_POINT } from '../const';
import { InputValues } from '../../pages/Home/types';
import { Issue } from '../../types/issue';

export const getIssueList = async (inputValues: InputValues) => {
  return await AXIOS.get<Issue[]>(END_POINT.GET_ISSUE_LIST(inputValues));
};
