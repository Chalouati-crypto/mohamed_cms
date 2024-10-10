import styled, { css } from "styled-components";

const variations = {
  grey: css`
    color: var(--color-white);
    background-color: var(--color-dark-grey);
    border: 1px solid var(--color-dark-grey);
    &:hover {
      background-color: var(--color-black);
      border: 1px solid var(--color-white);
    }
  `,
  black: css`
    color: var(--color-white);
    background: var(--color-black);
    border: 1px solid var(--color-black);

    &:hover {
      background-color: var(--color-grey-50);
      color: var(--color-black);
      border: 1px solid var(--color-black);
    }
  `,
  white: css`
    color: var(--color-black);
    background: var(--color-white);
    border: 1px solid var(--color-black);
  `,
  danger: css`
    color: var(--color-white);
    background: #931717;
  `,
  green: css`
    margin-top: 1rem;
    padding: 0.7rem 2.5rem;
    background-color: var(--color-green);
    &:hover {
      color: var(--color-green);
      background-color: var(--color-blue);
      border: 2px solid var(--color-green);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 1rem 3rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "grey",
  size: "small",
};

export default Button;
