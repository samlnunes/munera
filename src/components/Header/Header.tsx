import { Container, Nav, BoxUser, UserProfile, Notifications } from "./styles";

export default function Header() {
  return (
    <Container>
      <img src="/munera-logo.png" alt="" />
      <Nav>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li style={{ borderBottom: "3px solid #1974B9" }}>
            <a href="#">Entenda uma oferta pública</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Empresas</a>
          </li>
        </ul>
      </Nav>
      <BoxUser>
        <Notifications></Notifications>
        <UserProfile></UserProfile>
      </BoxUser>
    </Container>
  );
}
