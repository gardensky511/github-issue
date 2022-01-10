import { InputValues } from '../../pages/Home/types';

export type GetRepositoryDataParam = Omit<InputValues, 'page'>;

export type RepositoryData = {
  full_name: string;
  open_issues_count: number;
};

export type RepositoryState = {
  fullName: string;
  openIssuesCount: number;
};
