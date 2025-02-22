import React from 'react';
import { StyledSectionTitle } from './Section.styled';

export class Section extends React.Component {
  render = () => {
    const { title, children } = this.props;
    return (
      <>
        <StyledSectionTitle>{title}</StyledSectionTitle>
        {children}
      </>
    );
  };
}
