import { ChangeEvent, useState } from 'react';
import { fetchIssueList } from '../../../redux/issue/thunk';
import { GetIssueListParam } from '../../../types/issue';
import { useAppDispatch } from '../../../redux/store';
import { fetchRepositoryData } from '../../../redux/repository/thunk';

import { InputValues } from '../types';
export const useHandler = () => {
  const dispatch = useAppDispatch();
  const [inputValues, setInputValues] = useState<InputValues>({ owner: '', repository: '', page: 1 });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleClick = () => {
    dispatch(fetchIssueList(inputValues));
    dispatch(fetchRepositoryData(inputValues));
  };

  return {
    handleChange,
    handleClick,
  };
};
