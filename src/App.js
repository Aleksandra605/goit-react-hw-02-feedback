import React from 'react';
import './App.css';
import Section from './component/SectionFeedback';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
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

  render() {
    let { good, neutral, bad } = this.state;
    let total = good + bad + neutral;
    let percentage = Math.round((good / total) * 100);

    return (
      <Section
        title="Please leave feedback"
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        percentage={percentage}
        countGoodFB={this.countGoodFB}
        countBadFB={this.countBadFB}
        countNeutralFB={this.countNeutralFB}
      />
    );
  }
}

export default App;
