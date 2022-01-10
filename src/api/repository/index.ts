import { AXIOS, END_POINT } from '../const';
import { GetRepositoryDataParam, RepositoryData } from '../../types/repository';

export const getRepositoryData = (getRepositoryDataParam: GetRepositoryDataParam) => {
  return AXIOS.get<RepositoryData>(END_POINT.GET_REPOSITORY_DATA(getRepositoryDataParam));
};
