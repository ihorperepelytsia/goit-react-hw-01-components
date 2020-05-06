import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const Statistics = ({ title, stats = [] }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => {
        const RandobBackgroundColor = {
          backgroundColor: `rgb(${randomInteger(1, 256)},${randomInteger(
            1,
            256,
          )},${randomInteger(1, 256)})`,
        };
        return (
          <li className={styles.item} style={RandobBackgroundColor} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
