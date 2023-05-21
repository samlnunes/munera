import { Container, Top, Content, BoxImage } from "./styles";
import { dayjsUtc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";

export interface IPublication {
  icon: string;
  company: string;
  date: string;
  content: string;
  img: string;
  codeCompany: string;
}

const BoxPublic: React.FC<IPublication> = ({
  company,
  codeCompany,
  icon,
  date,
  content,
  img,
}) => {
  const formatterDiff = (date: string) => {
    if (dayjsUtc().diff(dayjsUtc.utc(date).local(), "hour") === 0) {
      return `${dayjsUtc().diff(
        dayjsUtc.utc(date).local(),
        "minute"
      )} minutes ago`;
    }

    return `${dayjsUtc().diff(dayjsUtc.utc(date).local(), "hour")} hours ago`;
  };
  return (
    <Container>
      <Content>
        <Top>
          <Link href={`/empresas/${codeCompany}`}>
            <img src={icon} alt="" />
          </Link>
          <div>
            <h1>{company}</h1>
            <span>{formatterDiff(date)}</span>
          </div>
        </Top>
        <p>{content}</p>
      </Content>
      {img && (
        <BoxImage>
          <Image src={img} alt="" width={0} height={0} sizes="100vw" />
        </BoxImage>
      )}
    </Container>
  );
};

export default BoxPublic;
