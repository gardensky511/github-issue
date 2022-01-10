import axios from 'axios';
import { ISSUE_COUNT_PER_PAGE } from '../../pages/Home/const';
import { InputValues } from '../../pages/Home/types';
import { GetRepositoryDataParam } from '../../types/repository';

export const AXIOS = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
});

export const END_POINT = {
  GET_ISSUE_LIST: ({ owner, repository, page }: InputValues) => `/repos/${owner}/${repository}/issues?per_page=${ISSUE_COUNT_PER_PAGE}&page=${page}`,
  GET_REPOSITORY_DATA: ({ owner, repository }: GetRepositoryDataParam) => `/repos/${owner}/${repository}`,
};
