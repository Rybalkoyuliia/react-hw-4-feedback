import React from 'react';
import {
  StyledStatisticsItem,
  StyledStatisticsItemName,
  StyledStatisticsItemValue,
  StyledStatisticsList,
  StyledStatisticsResultsList,
  StyledStatisticsWrapper,
} from './Statistics.styled';

export class Statistics extends React.Component {
  render = () => {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StyledStatisticsWrapper>
        <StyledStatisticsList>
          <StyledStatisticsItem>
            <StyledStatisticsItemName>Good:</StyledStatisticsItemName>
            <StyledStatisticsItemValue>{good}</StyledStatisticsItemValue>
          </StyledStatisticsItem>
          <StyledStatisticsItem>
            <StyledStatisticsItemName>Neutral:</StyledStatisticsItemName>
            <StyledStatisticsItemValue>{neutral}</StyledStatisticsItemValue>
          </StyledStatisticsItem>
          <StyledStatisticsItem>
            <StyledStatisticsItemName>Bad:</StyledStatisticsItemName>
            <StyledStatisticsItemValue>{bad}</StyledStatisticsItemValue>
          </StyledStatisticsItem>
        </StyledStatisticsList>

        <StyledStatisticsResultsList>
          <StyledStatisticsItem>
            <StyledStatisticsItemName>Total:</StyledStatisticsItemName>
            <StyledStatisticsItemValue>{total}</StyledStatisticsItemValue>
          </StyledStatisticsItem>
          <StyledStatisticsItem>
            <StyledStatisticsItemName>
              Positive feedback percentage:
            </StyledStatisticsItemName>
            <StyledStatisticsItemValue>
              {positivePercentage}
            </StyledStatisticsItemValue>
          </StyledStatisticsItem>
        </StyledStatisticsResultsList>
      </StyledStatisticsWrapper>
    );
  };
}
