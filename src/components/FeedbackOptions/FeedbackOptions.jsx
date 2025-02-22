import { Button } from 'components/Button/Button';
import React from 'react';
import { StyledFeedbackList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledFeedbackList>
      {options.map(button => (
        <li key={button}>
          <Button changeCount={onLeaveFeedback} label={button} />
        </li>
      ))}
    </StyledFeedbackList>
  );
};
