import { UserMenu } from "@/blocks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Nav, BoxUser, UserProfile, Notifications } from "./styles";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
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
      id: "empresas",
      label: "Empresas",
      href: "/empresas",
    },
  ];

  return (
    <>
      <Container>
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
