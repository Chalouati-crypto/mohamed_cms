import styled, { css } from "styled-components";
const variations = {
  small: css`
    padding: 0.2rem 0.5rem;
    max-width: 10rem;
    min-width: 10rem;
  `,

  large: css`
    padding: 0.5rem 0.5rem;
    max-width: 20rem;
    min-width: 20rem;
  `,
};
const Input = styled.input`
  border: 1px solid var(--color-grey);
  ${(props) => variations[props.variation]}
`;
Input.defaultProps = {
  variation: "large",
};

export default Input;
// px-4 py-3 text-lg border-2 border-grey
// py-4 px-2 border-2 w-[20rem]
