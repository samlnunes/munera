import Head from "next/head";
import { Header } from "@/components";
import { Content, SideBar } from "@/styles/styles";

const Empresas: React.FC = () => {
  return (
    <>
      <Head>
        <title>Munera Business</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SideBar left/>
      <Content>
      </Content>
      <SideBar />
    </>
  );
};

export default Empresas;