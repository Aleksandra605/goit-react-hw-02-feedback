import s from './component.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        Good <span className={s.span}>{good}</span>
      </li>
      <li className={s.item}>
        Neutral <span className={s.span}>{neutral}</span>
      </li>
      <li className={s.item}>
        Bad <span className={s.span}>{bad}</span>
      </li>
      <li className={s.item}>
        Total<span className={s.span}>{total}</span>
      </li>
      <li className={s.item}>
        Positive feedback <span className={s.span}>{percentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
