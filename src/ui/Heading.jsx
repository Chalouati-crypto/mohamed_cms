import styled, { css } from "styled-components";
const variations = {
  black: css`
    color: var(--color-black);
  `,
  white: css`
    color: var(--color-white);
  `,
};
const Heading = styled.h1`
  ${(props) => variations[props.variation]}
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      padding-top: 1rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 0.9rem;
      font-weight: 500;
    `}
      
      ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 0.8rem;
      font-weight: 600;
      text-align: center;
    `}
    
  line-height: 1.4;
`;

export default Heading;
