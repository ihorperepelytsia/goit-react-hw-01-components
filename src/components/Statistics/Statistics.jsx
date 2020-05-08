import React from 'react';
import PropTypes from 'prop-types';
import {
  statistics,
  headline,
  statList,
  item,
  format,
  percent,
} from './Statistics.module.css';

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const Statistics = ({ title, stats = [] }) => (
  <section className={statistics}>
    {title && <h2 className={headline}>{title}</h2>}

    <ul className={statList}>
      {stats.map(({ id, label, percentage }) => {
        const RandobBackgroundColor = {
          backgroundColor: `rgb(${randomInteger(1, 256)},${randomInteger(
            1,
            256,
          )},${randomInteger(1, 256)})`,
        };
        return (
          <li className={item} style={RandobBackgroundColor} key={id}>
            <span className={format}>{label}</span>
            <span className={percentage}>{percent}%</span>
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
