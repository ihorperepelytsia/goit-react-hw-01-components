import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline, alt = 'photo' }) => {
  const statusClass = isOnline ? styles.status : styles.offline;
  return (
    <>
      <span className={statusClass}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={alt} width="48" />
      <p className={styles.name}>{name}</p>
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
