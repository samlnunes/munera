import { useCompany, useUser } from "@/services";
import { Container, Box, UserPhoto, MenuTabs, Content } from "./styles";
import { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/pt-br";
import { ArrowBackIos, ArrowForwardIos, Logout } from "@mui/icons-material";

const localizer = dayjsLocalizer(dayjs);
interface PropsMenu {
  onClose: () => void;
}

const CustomToolbar = ({ onNavigate, date }: any) => (
  <div className="rbc-toolbar">
    <span className="rbc-btn-group">
      <button type="button" onClick={() => onNavigate("PREV")}>
        <ArrowBackIos />
      </button>
    </span>
    <span className="rbc-toolbar-label">
      {date
        .toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
        .toUpperCase()}
    </span>
    <span className="rbc-btn-group">
      <button type="button" onClick={() => onNavigate("NEXT")}>
        <ArrowForwardIos />
      </button>
    </span>
  </div>
);

const UserMenu: React.FC<PropsMenu> = ({ onClose }) => {
  const [idCompany, setIdCompany] = useState<string | null>(null);
  const [idUser, setIdUser] = useState<string | null>(null);
  const { user } = useUser(Number(idUser));
  const { company } = useCompany(Number(idCompany));

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("id-user");
      localStorage.removeItem("id-company");
      const message = {
        key: "id-local",
        value: "",
      };
      window.postMessage(message, "*");

      onClose();
    }
  };

  const iniciais = user?.nome
    .split(" ")
    .map((palavra: any) => palavra[0].toUpperCase())
    .join("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIdCompany(localStorage.getItem("id-company"));
      setIdUser(localStorage.getItem("id-user"));
    }
  }, []);

  const events = [
    {
      id: 1,
      title: "Abertura de Capital Nubank",
      start: dayjs("2023-10-27T10:00:00"),
      end: dayjs("2023-10-30T10:00:00"),
      style: {
        backgroundColor: "purple",
        color: "white", 
      },
    },
    {
      id: 2,
      title: "Abertura de Capital PETZ",
      start: dayjs("2023-10-10T14:00:00"),
      end: dayjs("2023-10-30T16:00:00"),
      style: {
        backgroundColor: "orange", 
        color: "black", 
      },
    },
  ];

  return (
    <Container>
      <Box>
        <UserPhoto
          img={
            idCompany
              ? `${process.env.NEXT_PUBLIC_S3}/logos/${idCompany}-logo.png`
              : ""
          }
        >
          <h1>{iniciais}</h1>
        </UserPhoto>
        <h1>{user ? user.nome : company?.nome}</h1>
        <MenuTabs>
          <li>
            <button>Editar cadastro</button>
          </li>
          {user && (
            <>
              <li>
                <button>Alterar senha</button>
              </li>
              <li>
                <button>Ofertas curtidas</button>
              </li>
            </>
          )}
          <li>
            <button className="active">Minhas datas</button>
          </li>
          <li>
            <button onClick={() => logout()}>
              Sair <Logout />
            </button>
          </li>
        </MenuTabs>
      </Box>
      <Content>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          className="custom-calendar"
          eventPropGetter={(event) => ({
            style: event.style,
          })}
          components={{
            toolbar: (toolbarProps) => (
              <CustomToolbar
                onNavigate={toolbarProps.onNavigate}
                date={toolbarProps.date}
              />
            ),
          }}
        />
      </Content>
      <button onClick={onClose}>
        <img src="/close-icon.svg" alt="" loading="lazy" />
      </button>
    </Container>
  );
};

export default UserMenu;
