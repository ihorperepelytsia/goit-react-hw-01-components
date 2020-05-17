import React from 'react';
import PropTypes from 'prop-types';
import {
  status,
  offline,
  avatar as avatarImg,
  name as firstName,
} from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline, alt = 'photo' }) => {
  return (
    <>
      <span className={isOnline ? status : offline}>{isOnline}</span>
      <img className={avatarImg} src={avatar} alt={alt} />
      <p className={firstName}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
