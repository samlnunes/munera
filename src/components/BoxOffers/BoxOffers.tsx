import Link from "next/link";
import { Container, Logo, Content } from "./styles";

interface OffersProps {
  logo: string;
  title: string;
  code: string;
}

const BoxOffers: React.FC<OffersProps> = ({ logo, title, code }) => {
  return (
    <Link href={`/empresas/${code}`}>
      <Container>
        <Logo>
          <img src={logo} alt="" loading="lazy" />
        </Logo>
        <Content>
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            explicabo sed autem odio vel assumenda quidem possimus excepturi,
            magnam iusto nam rerum exercitationem quam numquam enim facere ex
            esse repudiandae?
          </p>
        </Content>
      </Container>
    </Link>
  );
};

export default BoxOffers;
