import React from 'react';
import { StyledStatisticsPhrase } from './Notification.styled';

export class Notification extends React.Component {
  render = () => {
    return (
      <StyledStatisticsPhrase>{this.props.message}</StyledStatisticsPhrase>
    );
  };
}
