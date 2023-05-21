import Link from "next/link";
import { Container, Logo } from "./styles";

interface OffersProps {
  logo: string;
  title: string;
  code: string;
}

const BoxOffers: React.FC<OffersProps> = ({ logo, title, code }) => {
  return (
    <Container>
      <Link href={`/empresas/${code}`}>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </Link>
      <p>{title}</p>
    </Container>
  );
};

export default BoxOffers;
