import { StyledButton } from "../Button/StyledButton";
import { StyledMain } from "../Main/StyledMain";
import { StyledForm } from "./StyledForm";


function Login() {
  const form = (event) => {
    event.preventDefault();
    console.log("cliquei no botão de login");
  };

  const form2 = (event) => {
    event.preventDefault();
    console.log("cliquei no botão de criar conta");
  };
  
  return (
    <>
      <StyledMain>
        <StyledForm action="" method="POST">
          <label className="loginForm">
            <h1>Faça seu login</h1>
            Digite Seu e-mail: <input type="text" id="" />
            Digite Sua Senha: <input type="password" id="" />
            <div>
              <StyledButton onClick={form}>Entrar</StyledButton>
            </div>
          </label>

          <label className="createAccountForm">
            <h1>Crie sua conta</h1>
            Digite Seu e-mail: <input type="text" id="" />
            Digite Sua Senha: <input type="password" id="" />
            Digite Sua Senha novamente: <input type="password" id="" />
            <div>
              <StyledButton onClick={form2}>Criar Conta</StyledButton>
            </div>
          </label>
        </StyledForm>
      </StyledMain>
    </>
  );
}

export default Login;
