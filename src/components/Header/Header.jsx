import { StyledHeader } from "./StyleHeader";
import { StyledButton } from "../Button/StyledButton";

function Header() {
  return (
    <StyledHeader>
      <h1>Agenda</h1>
      <StyledButton>Entrar</StyledButton>
    </StyledHeader>
  );
}
export default Header;
