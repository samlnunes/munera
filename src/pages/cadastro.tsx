import Head from "next/head";
import { Header } from "@/components";
import { Content, SideBar } from "@/styles/styles";
import { Register } from "@/blocks";

export default function Cadastro() {
  return (
    <>
      <Head>
        <title>Munera Business</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SideBar left />
      <Content>
        <Register />
      </Content>
      <SideBar />
    </>
  );
}
