import styled from '@emotion/styled';
import { Button, Input } from '@chakra-ui/react';
import { useHandler } from '../../hooks/useHandler';

export const InputField = () => {
  const { handleClick, handleChange } = useHandler();
  return (
    <Container>
      <Input name="owner" onChange={handleChange} placeholder="Enter the github ID (e.g facebook)" size="lg" />
      <Slash />
      <Input name="repository" onChange={handleChange} placeholder="Repository name, too (e.g react)" size="lg" />
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
