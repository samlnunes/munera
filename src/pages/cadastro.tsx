import Head from "next/head";
import { Content, SideBar } from "@/styles/styles";
import { Register } from "@/blocks";

export default function Cadastro() {
  return (
    <>
      <Head>
        <title>Munera Business</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/munera-logo.png" />
      </Head>
      <SideBar left />
      <Content style={{ margin: 0, height: "100vh" }}>
        <Register />
      </Content>
      <SideBar />
    </>
  );
}
