import { useRouter } from "next/router";
import React from "react";
import Login from "./Login";
import LoginCompany from "./LoginCompany";

const LoginIndex: React.FC = () => {
  const router = useRouter();
  const hasEmpresa = router.asPath.includes("empresa");

  return <>{hasEmpresa ? <LoginCompany /> : <Login />}</>;
};

export default LoginIndex;
