import { ChangeEvent, useState } from 'react';
import { fetchIssueList } from '../../../redux/issue/thunk';
import { GetIssueListParam } from '../../../types/issue';
import { useAppDispatch } from '../../../redux/store';
import { fetchRepositoryData } from '../../../redux/repository/thunk';

export const useHandler = () => {
  const dispatch = useAppDispatch();
  const [getIssueParam, setGetIssueParam] = useState<GetIssueListParam>({ owner: '', repository: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGetIssueParam({ ...getIssueParam, [name]: value });
  };

  const handleClick = () => {
    dispatch(fetchIssueList(getIssueParam));
    dispatch(fetchRepositoryData(getIssueParam));
  };

  return {
    handleChange,
    handleClick,
  };
};
