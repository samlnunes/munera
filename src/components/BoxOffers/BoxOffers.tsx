import Link from "next/link";
import { Container, Logo, Content, FakeImage } from "./styles";
import { descriptions } from "@/helpers/descriptionCompany";

interface OffersProps {
  logo: string;
  title: string;
  code: string;
}

const BoxOffers: React.FC<OffersProps> = ({ logo, title, code }) => {
  const iniciais = title
    .split(" ")
    .map((palavra: any) => palavra[0].toUpperCase())
    .join("");

  return (
    <Link href={`/empresas/${code}`}>
      <Container>
        <Logo>
          {Number(code) < 15 ? (
            <img src={logo} alt="empresa-logo" loading="lazy" />
          ) : (
            <FakeImage>
              <span>{iniciais}</span>
            </FakeImage>
          )}
        </Logo>
        <Content>
          <h1>{title}</h1>
          <p>
            {descriptions.find((element) => element.code === Number(code))
              ?.description ??
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat explicabo, laborum ullam, nisi laudantium officiis doloremque amet ratione vitae odio quia mollitia consequuntur reiciendis voluptates dolorem error natus hic."}
          </p>
        </Content>
      </Container>
    </Link>
  );
};

export default BoxOffers;
