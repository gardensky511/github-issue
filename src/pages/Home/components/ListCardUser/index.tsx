import styled from '@emotion/styled';
import { IssueCreator as Props } from '../../../../types/issue';

export const ListCardUser = ({ avatar_url, login }: Props) => {
  return (
    <Container>
      <Avatar src={avatar_url} />
      <Name>{login}</Name>
    </Container>
  );
};

const Container = styled.div`
  min-width: 20%;
  margin-right: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  margin-bottom: 5px;
`;

const Name = styled.p`
  font-size: 16px;
`;
