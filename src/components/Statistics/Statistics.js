import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.text}>Good:</p>
        <span className={css.text}>{good}</span>
      </li>
      <li className={css.item}>
        <p className={css.text}>Neutral:</p>
        <span className={css.text}>{neutral}</span>
      </li>
      <li className={css.item}>
        <p className={css.text}>Bad:</p>
        <span className={css.text}>{bad}</span>
      </li>
      <li className={css.item}>
        <p className={css.text}>Total:</p>
        <span className={css.text}>{total}</span>
      </li>
      <li className={css.item}>
        <p className={css.text}>PositivePercentage:</p>
        <span className={css.text}>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
