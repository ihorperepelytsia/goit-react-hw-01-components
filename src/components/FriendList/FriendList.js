import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(item => (
      <li className={styles.item} key={item.id}>
        <FriendListItem {...item} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
