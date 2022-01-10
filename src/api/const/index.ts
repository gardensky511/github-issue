import axios from 'axios';
import { GetIssueListParam } from '../../types/issue';

export const AXIOS = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
});

export const END_POINT = {
  GET_ISSUE_LIST: ({ owner, repository }: GetIssueListParam) => `/repos/${owner}/${repository}/issues?per_page=15`,
};
