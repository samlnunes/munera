import { Container, Box, UserPhoto, MenuTabs, Content } from "./styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface PropsMenu {
  onClose: () => void;
}

const UserMenu: React.FC<PropsMenu> = ({ onClose }) => {
  return (
    <Container>
      <Box>
        <UserPhoto />
        <h1>Nubank</h1>
        <MenuTabs>
          <li>
            <button>Editar cadastro</button>
          </li>
          {/* <li>
            <button>Alterar senha</button>
          </li>
          <li>
            <button>Ofertas curtidas</button>
          </li> */}
          <li>
            <button className="active">Minhas datas</button>
          </li>
        </MenuTabs>
      </Box>
      <Content>
        <Calendar />
      </Content>
      <button onClick={onClose}>
        <img src="/close-icon.svg" alt="" />
      </button>
    </Container>
  );
};

export default UserMenu;
