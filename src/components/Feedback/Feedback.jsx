import React, { useReducer } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import { StyledFeedbackContainer } from './Feedback.styled';
import { feedbackReducer, initialState } from './reducer';

export const Feedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const countTotalFeedback = () => {
    return state.good + state.bad + state.neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    let sum = countTotalFeedback();
    if (sum === 0) {
      return 0;
    }
    let positiveFeedbacks = 0;
    positiveFeedbacks = (state.good * 100) / sum;
    return Math.round(positiveFeedbacks);
  };

  const onLeaveFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        dispatch({ type: 'good' });
        break;
      case 'neutral':
        dispatch({ type: 'neutral' });
        break;
      case 'bad':
        dispatch({ type: 'bad' });
        break;
      default:
        break;
    }
  };

  return (
    <StyledFeedbackContainer>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </StyledFeedbackContainer>
  );
};
