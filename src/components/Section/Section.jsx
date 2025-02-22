import React from 'react';
import { StyledSectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </>
  );
};
