export type GetRepositoryDataParam = {
  owner: string;
  repository: string;
};

export type RepositoryData = {
  full_name: string;
  open_issues_count: number;
};

export type RepositoryState = {
  fullName: string;
  openIssuesCount: number;
};
