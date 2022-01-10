import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setCurrentPageNumber, setOwner, setRepository } from '../../../redux/issue/modules';
import { InputValues } from '../types';
import { INITIAL_INPUT_VALUES } from '../const';

export const useHandler = () => {
  const dispatch = useAppDispatch();
  const [inputValues, setInputValues] = useState<InputValues>({ owner: INITIAL_INPUT_VALUES.OWNER, repository: INITIAL_INPUT_VALUES.REPOSITORY, page: 1 });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleClick = () => {
    dispatch(setOwner(inputValues.owner));
    dispatch(setRepository(inputValues.repository));
  };

  const handlePageNumberClick = (pageNumber: number) => {
    dispatch(setCurrentPageNumber(pageNumber));
    window.scrollTo(0, 0);
  };

  return {
    handleChange,
    handleClick,
    handlePageNumberClick,
    inputValues,
  };
};
