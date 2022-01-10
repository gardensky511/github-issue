import styled from '@emotion/styled';
import { Issue as Props } from '../../../../types/issue';
import { ListCardUser } from '../ListCardUser';
import { ListCardBody } from '../ListCardBody';

export const ListCard = ({ user, ...issue }: Props) => {
  return (
    <Container>
      <ListCardUser {...user} />
      <ListCardBody {...issue} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #c1cfd7;
  background-color: #f9f9fc;
  border-radius: 8px;
  padding: 20px;

  &:hover {
    cursor: pointer;
    background-color: #f2f2fa;
  }
`;
