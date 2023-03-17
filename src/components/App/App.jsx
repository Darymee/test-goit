import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { Card } from '../Card/Card';

import { PageWrapper, CardList } from './App.styled';

export const App = () => {
  const followingList = useSelector(selectUsers);

  return (
    <PageWrapper>
      {followingList.length > 0 && (
        <CardList>
          {followingList.map(({ id, ...info }) => (
            <Card key={id} info={info} />
          ))}
        </CardList>
      )}
    </PageWrapper>
  );
};
