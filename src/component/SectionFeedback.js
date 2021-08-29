import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFB = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Section title={this.props.title}>
        <FeedbackOptions onLeaveFeedback={this.countGoodFB} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
        />
      </Section>
    );
  }
}

export default Section;