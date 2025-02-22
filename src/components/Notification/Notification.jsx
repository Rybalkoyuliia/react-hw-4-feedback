import React from 'react';
import { StyledStatisticsPhrase } from './Notification.styled';

export const Notification = ({ message }) => {
  return <StyledStatisticsPhrase>{message}</StyledStatisticsPhrase>;
};
