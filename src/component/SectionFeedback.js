import s from './component.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    let {
      title,
      countGoodFB,
      countNeutralFB,
      countBadFB,
      good,
      bad,
      neutral,
      total,
      percentage,
    } = this.props;
    return (
      <section className={s.section}>
        <h2>{title}</h2>
        <FeedbackOptions
          onLeaveGoodFB={countGoodFB}
          onLeaveNeutralFB={countNeutralFB}
          onLeaveBadFB={countBadFB}
        />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </section>
    );
  }
}

export default Section;
