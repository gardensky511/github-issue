import styled from '@emotion/styled';
import { Button, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { InputValues } from '../../types';

type Props = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  inputValues: InputValues;
};

export const InputField = ({ handleChange, handleClick, inputValues }: Props) => {
  return (
    <Container>
      <Input name="owner" onChange={handleChange} placeholder="Enter the github ID (e.g facebook)" size="lg" value={inputValues.owner} />
      <Slash />
      <Input name="repository" onChange={handleChange} placeholder="Repository name, too (e.g react)" size="lg" value={inputValues.repository} />
      <Button ml="10px" size="lg" onClick={handleClick}>
        Search
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Slash = styled.div`
  width: 10px;
  background-color: #a0afb8;
  margin: 5px 10px;
  transform: rotate(10deg);
`;
