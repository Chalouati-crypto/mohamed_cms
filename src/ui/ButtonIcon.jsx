import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
