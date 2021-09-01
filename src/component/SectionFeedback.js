import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import PropTypes from 'prop-types';

class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFB = () => {
    this.setState(prevState => ({
      good: ++prevState.good,
    }));
  };

  countBadFB = () => {
    this.setState(prevState => ({
      bad: ++prevState.bad,
    }));
  };

  countNeutralFB = () => {
    this.setState(prevState => ({
      neutral: ++prevState.neutral,
    }));
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.bad + this.state.neutral;
    console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return percentage;
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div>
        <h2>{this.props.title}</h2>
        <FeedbackOptions
          onLeaveGoodFB={this.countGoodFB}
          onLeaveNeutralFB={this.countNeutralFB}
          onLeaveBadFB={this.countBadFB}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Section;
