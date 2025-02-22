import { StyledButton } from './Button.styled';

export const Button = ({ changeCount, label }) => (
  <StyledButton type="button" value={label} onClick={() => changeCount(label)}>
    {label}
  </StyledButton>
);
