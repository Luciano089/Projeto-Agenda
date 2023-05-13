import { StyledHeader } from "./StyleHeader";
import { StyledButton } from "../Button/StyledButton";

function Header() {
  return (
    <StyledHeader>
      Agenda
      <StyledButton
        onClick={() => {
          console.log("clicado");
        }}
      >
        Entrar
      </StyledButton>
    </StyledHeader>
  );
}
export default Header;
