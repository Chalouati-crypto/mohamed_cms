import { IoMdLogOut } from "react-icons/io";
import { useLogout } from "./useLogout";
import Button from "../../ui/Button";
import styled from "styled-components";

const StyledLogoutButton = styled(Button)`
  font-size: 1rem;
`;
function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <StyledLogoutButton onClick={logout} disabled={isLoading}>
      <IoMdLogOut />
    </StyledLogoutButton>
  );
}

export default Logout;
