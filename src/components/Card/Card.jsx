import { useDispatch } from 'react-redux';

import { ReactComponent as Logo } from 'images/logo.svg';
import mainImg from 'images/main-img.png';
import dummyAvatar from 'images/avatar.png';

import {
  CardWrapper,
  Label,
  MainImage,
  AvatarWrapper,
  TextWrapper,
  Button,
} from './Card.styled';
import { followToggler } from 'redux/slice/usersSlice';

export const Card = ({ info }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    if (e.target.name === info.user) {
      if (!info.following) {
        info.following = true;
        info.followers += 1;
      } else {
        info.following = false;
        info.followers -= 1;
      }
      dispatch(followToggler(info));
    }
  };

  const { user, avatar, tweets, followers, following } = info;

  return (
    <CardWrapper>
      <Logo />
      <MainImage src={mainImg} alt="main-img" />

      <AvatarWrapper>
        <div>
          <img src={avatar || dummyAvatar} alt="user-avatar" />
        </div>
      </AvatarWrapper>
      <TextWrapper>
        <p>
          <span>{tweets}</span> Tweets
        </p>
        <p>
          <span>{new Intl.NumberFormat('en-US').format(followers)}</span>{' '}
          Followers
        </p>
      </TextWrapper>

      <Button
        type="button"
        onClick={e => handleClick(e)}
        following={following}
        name={user}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
      <Label>{user}</Label>
    </CardWrapper>
  );
};
