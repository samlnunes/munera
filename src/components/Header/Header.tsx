import { UserMenu } from "@/blocks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Nav,
  BoxUser,
  UserProfile,
  Notifications,
  MenuMobile,
  Top,
  NavMobile,
} from "./styles";
import {
  Notifications as NotificationsIcon,
  Menu,
  KeyboardBackspace,
  Home,
  LocalOffer,
  Apartment,
} from "@mui/icons-material";
import { useUser } from "@/services";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const [menuMobileShow, setMenuMobileShow] = useState(false);
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
      icon: <Home />,
    },
    {
      id: "oferta-publica",
      label: "Entenda uma oferta pública",
      href: "/oferta-publica",
      icon: <LocalOffer />,
    },
    {
      id: "empresas",
      label: "Empresas",
      href: "/empresas",
      icon: <Apartment />,
    },
  ];

  return (
    <>
      <Container>
        <button onClick={() => setMenuMobileShow(true)} className="menu-mobile">
          <Menu color="action" fontSize="large" />
        </button>

        {menuMobileShow && (
          <MenuMobile>
            <Top>
              <button onClick={() => setMenuMobileShow(false)}>
                <KeyboardBackspace color="action" />
              </button>
              <h1>Menu</h1>
            </Top>

            <NavMobile>
              <ul>
                {menuItems.map((item) => (
                  <Link href={item.href} key={item.id} legacyBehavior>
                    <li
                      className={
                        router.asPath === "/" && item.id === "home"
                          ? "active"
                          : router.asPath.includes(item.id)
                          ? "active"
                          : ""
                      }
                    >
                      {item.icon} {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </NavMobile>
          </MenuMobile>
        )}

        <Link href="/">
          <img src="/munera-logo-slogan.png" alt="" loading="lazy" />
        </Link>
        <Nav>
          <ul>
            {menuItems.map((item) => (
              <Link href={item.href} key={item.id} legacyBehavior>
                <li
                  className={
                    router.asPath === "/" && item.id === "home"
                      ? "active"
                      : router.asPath.includes(item.id)
                      ? "active"
                      : ""
                  }
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </Nav>
        <BoxUser>
          <Notifications>
            <NotificationsIcon color="action" />
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
