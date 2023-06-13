import Head from "next/head";
import LoginIndex from "@/blocks/Login";
import { Content } from "@/styles/styles";

export default function LoginEmpresa() {
  return (
    <>
      <Head>
        <title>Munera - Login Empresa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/munera-logo.png" />
      </Head>
      <Content style={{ margin: 0, height: "100vh" }}>
        <LoginIndex />
      </Content>
    </>
  );
}
