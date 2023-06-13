import { UserMenu } from "@/blocks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Nav, BoxUser, UserProfile, Notifications } from "./styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useUser } from "@/services";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const [idCompany, setIdCompany] = useState<string | null>(null);
  const [idUser, setIdUser] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useUser(Number(idUser));

  const iniciais = user?.nome
    .split(" ")
    .map((palavra: any) => palavra[0].toUpperCase())
    .join("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIdCompany(localStorage.getItem("id-company"));
      setIdUser(localStorage.getItem("id-user"));
    }
  }, [menuShow]);

  const menuItems = [
    {
      id: "home",
      label: "Início",
      href: "/",
    },
    {
      id: "oferta-publica",
      label: "Entenda uma oferta pública",
      href: "/oferta-publica",
    },
    {
      id: "ofertas",
      label: "Ofertas",
      href: "/ofertas",
    },
  ];

  return (
    <>
      <Container>
        <Link href='/'>
          <img src="/munera-logo.png" alt="" loading="lazy" />
        </Link>
        <Nav>
          <ul>
            {menuItems.map((item, key) => (
              <li
                key={key}
                className={
                  router.asPath === "/" && item.id === "home"
                    ? "active"
                    : router.asPath.includes(item.id)
                    ? "active"
                    : ""
                }
              >
                <Link href={item.href} legacyBehavior>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
        <BoxUser>
          <Notifications>
            <NotificationsIcon />
          </Notifications>
          {idUser || idCompany ? (
            <UserProfile
              onClick={() => setMenuShow(true)}
              img={
                idCompany
                  ? `${process.env.NEXT_PUBLIC_S3}/logos/${idCompany}-logo.png`
                  : ""
              }
            >
              {iniciais}
            </UserProfile>
          ) : (
            <Link href="/login">Entrar</Link>
          )}
        </BoxUser>
      </Container>
      {menuShow && <UserMenu onClose={() => setMenuShow(false)} />}
    </>
  );
}
