import { UserMenu } from "@/blocks";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Nav, BoxUser, UserProfile, Notifications } from "./styles";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const router = useRouter();

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
    {
      id: "empresas",
      label: "Empresas",
      href: "/empresas",
    },
  ];

  return (
    <>
      <Container>
        <img src="/munera-logo.png" alt="" />
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
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </Nav>
        <BoxUser>
          <Notifications />
          <UserProfile onClick={() => setMenuShow(true)} />
        </BoxUser>
      </Container>
      {menuShow && <UserMenu onClose={() => setMenuShow(false)} />}
    </>
  );
}
