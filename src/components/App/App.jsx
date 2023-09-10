import { useSelector } from 'react-redux';

import { selectFilterType, selectUsers } from 'redux/selectors';

import { Card } from '../Card/Card';

import { PageWrapper, Title, CardList, Message } from './App.styled';
import { Filter } from './Filter/Filter';

export const App = () => {
  const followingList = useSelector(selectUsers);
  const selectedType = useSelector(selectFilterType);

  const sortList = () =>
    selectedType === 'following'
      ? followingList.filter(item => item.following)
      : followingList;

  return (
    <PageWrapper>
      <Title>Card Tweets</Title>
      <Filter />
      {sortList().length > 0 ? (
        <CardList>
          {sortList().map(({ id, ...info }) => (
            <Card key={id} info={info} />
          ))}
        </CardList>
      ) : (
        <Message>No following users</Message>
      )}
    </PageWrapper>
  );
};
