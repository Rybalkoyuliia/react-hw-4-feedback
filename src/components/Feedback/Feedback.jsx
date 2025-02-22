import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import React from 'react';
import { StyledFeedbackContainer } from './Feedback.styled';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    let sum = 0;
    sum = this.state.good + this.state.bad + this.state.neutral;
    return sum;
  }

  countPositiveFeedbackPercentage() {
    let sum = this.countTotalFeedback();
    if (sum === 0) {
      return 0;
    }
    let positiveFeedbacks = 0;
    positiveFeedbacks = (this.state.good * 100) / sum;
    return Math.round(positiveFeedbacks);
  }

  onLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    return (
      <StyledFeedbackContainer>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledFeedbackContainer>
    );
  }
}
