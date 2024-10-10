import styled from "styled-components";
import Logout from "../features/authentication/Logout";
const StyledHeader = styled.header`
  background-color: var(--color-black);
  color: var(--color-white);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5vw;
  height: 10vh;
  border-bottom: 0.5px solid rgba(71, 70, 77, 0.1);
`;

function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}

export default Header;
