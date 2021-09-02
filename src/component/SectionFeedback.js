import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Section extends React.Component {
  // countTotalFeedback = () => {
  //   let total = this.state.good + this.state.bad + this.state.neutral;
  //   console.log(total);
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   let percentage = Math.round(
  //     (this.state.good / this.countTotalFeedback()) * 100,
  //   );
  //   return percentage;
  // };

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
      <section>
        <h2>{title}</h2>
        <FeedbackOptions
          onLeaveGoodFB={countGoodFB}
          onLeaveNeutralFB={countNeutralFB}
          onLeaveBadFB={countBadFB}
        />
        {this.props.total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
            // total={this.countTotalFeedback()}
            // percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    );
  }
}

export default Section;
