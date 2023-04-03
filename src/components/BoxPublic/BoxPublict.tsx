import { Container, Top, Content } from "./styles";
import dayjs from "dayjs";
import Link from "next/link";

export interface IPublication {
  icon: string
  company: string
  date: string
  content: string
  img: string
  codeCompany: string
}

const BoxPublic: React.FC<IPublication> = ({
  company,
  codeCompany,
  icon,
  date,
  content,
  img,
}) => {
  return (
    <Container>
      <Content>
        <Top>
          <Link href={`/empresas/${codeCompany}`}>
            <img src={icon} alt="" />
          </Link>
          <div>
            <h1>{company}</h1>
            <span>{dayjs().diff(dayjs(date), "hour")} hours ago</span>
          </div>
        </Top>
        <p>{content}</p>
      </Content>
      <img src={img} alt="" />
    </Container>
  );
};

export default BoxPublic;
