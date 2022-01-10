import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setCurrentPageNumber, setOwner, setRepository } from '../../../redux/issue/modules';
import { InputValues } from '../types';

export const useHandler = () => {
  const dispatch = useAppDispatch();
  const [inputValues, setInputValues] = useState<InputValues>({ owner: '', repository: '', page: 1 });

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
  };
};
