import styled from '@emotion/styled';
import { Button, Input } from '@chakra-ui/react';
import { useHandler } from '../../hooks/useHandler';
import { INITIAL_INPUT_VALUES } from '../../const';

export const InputField = () => {
  const { handleClick, handleChange } = useHandler();
  return (
    <Container>
      <Input name="owner" onChange={handleChange} placeholder="Enter the github ID (e.g facebook)" size="lg" value={INITIAL_INPUT_VALUES.OWNER} />
      <Slash />
      <Input name="repository" onChange={handleChange} placeholder="Repository name, too (e.g react)" size="lg" value={INITIAL_INPUT_VALUES.REPOSITORY} />
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
