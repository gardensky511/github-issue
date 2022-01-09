import { ChangeEvent, useState } from 'react';
import { fetchIssueList } from '../../../redux/issue/thunk';
import { GetIssueListParam } from '../../../types/issue';
import { useAppDispatch } from '../../../redux/store';

export const useHandler = () => {
  const dispatch = useAppDispatch();
  const [getIssueParam, setGetIssueParam] = useState<GetIssueListParam>({ owner: '', repository: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGetIssueParam({ ...getIssueParam, [name]: value });
  };

  const handleClick = () => {
    dispatch(fetchIssueList(getIssueParam));
  };

  return {
    handleChange,
    handleClick,
  };
};
