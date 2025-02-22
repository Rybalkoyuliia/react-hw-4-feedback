import styled from 'styled-components';

export const StyledStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledStatisticsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledStatisticsItem = styled.li`
  display: flex;
`;

export const StyledStatisticsItemName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const StyledStatisticsItemValue = styled.p`
  font-size: 24px;
  padding-left: 5px;
`;

export const StyledStatisticsResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;
