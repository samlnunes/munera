import Head from "next/head";
import { useEffect, useState } from "react";
import { BoxPublic, Header } from "@/components";
import { Content, SideBar } from "@/styles/styles";
import { CompanyInfos } from "@/blocks";
import { IPublication } from "@/components/BoxPublic/BoxPublict";

export default function Empresa() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/api/publications")
      .then((response) => response.json())
      .then((publications) => {
        setPublications(publications);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      <Head>
        <title>Munera Business</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SideBar left>
        <CompanyInfos />
      </SideBar>
      <Content>
        {publications.map((publication: IPublication, key) => (
          <BoxPublic
            key={key}
            company={publication.company}
            icon={publication.icon}
            date={publication.date}
            content={publication.content}
            img={publication.img}
            codeCompany={publication.codeCompany}
          />
        ))}
      </Content>
      <SideBar />
    </>
  );
}
