import { Button } from 'components/Button/Button';
import React from 'react';
import { StyledFeedbackList } from './FeedbackOptions.styled';

export class FeedbackOptions extends React.Component {
  render = () => {
    const { options, onLeaveFeedback } = this.props;
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
}
