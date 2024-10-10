import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SpinnerDots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SpinnerDot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: black;
  border-radius: 50%;
  animation: ${bounceAnimation} 0.6s ease-in-out infinite;
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.5s;
  }
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerDots>
        <SpinnerDot />
        <SpinnerDot />
        <SpinnerDot />
      </SpinnerDots>
    </SpinnerContainer>
  );
}

export default Spinner;
