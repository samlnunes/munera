import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Container,
  Top,
  Description,
  ContentLogo,
  BoxBroker,
  BoxInfos,
  Links,
} from "./styles";
import { brokers } from "@/utils/brokers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { descriptions } from "@/helpers/descriptionCompany";

interface ICompany {
  nome: string;
  id_empresa: number;
  likes?: number;
  description?: string;
  brokers?: Number[];
}

const CompanyInfos: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [curtidasNew, setCurtidasNew] = useState(0);
  const [companyInfos, setCompanyInfos] = useState<ICompany>();

  const findBroker = (id: Number) => {
    const found = brokers.find((broker) => broker.code === id);

    return found;
  };

  useEffect(() => {
    if (!id) return;

    fetch(process.env.NEXT_PUBLIC_API_AUTH + `/empresas/${id}`)
      .then((response) => response.json())
      .then((company) => {
        setCompanyInfos(company);
        setCurtidasNew(31);
      })
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <Container>
      <Top>
        {Number(companyInfos?.id_empresa) < 15 && (
          <ContentLogo>
            <img
              src={`${process.env.NEXT_PUBLIC_S3}/logos/${companyInfos?.id_empresa}-logo.png`}
              alt=""
            />
          </ContentLogo>
        )}
        <BoxInfos>
          <div>
            <h1>{companyInfos?.nome}</h1>
            <button onClick={() => setCurtidasNew(curtidasNew + 1)}>
              <FavoriteIcon style={{ color: "#FF0000" }} />
            </button>
          </div>
          <span>{curtidasNew} curtidas</span>
          <div>
            {[1, 2, 3].map((broker, key) => (
              <BoxBroker key={key}>
                <img src={findBroker(broker)?.icon} alt="" loading="lazy" />
              </BoxBroker>
            ))}
          </div>
        </BoxInfos>
      </Top>
      <Description>
        <p>
          {descriptions.find(
            (element) => element.code === Number(companyInfos?.id_empresa)
          )?.description ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat explicabo, laborum ullam, nisi laudantium officiis doloremque amet ratione vitae odio quia mollitia consequuntur reiciendis voluptates dolorem error natus hic."}
        </p>
      </Description>
      <Links>
        <h1>Links úteis</h1>

        <ul>
          <li>
            <a
              href="/files/prospecto_definitivo.pdf"
              download="prospecto definitivo"
            >
              Prospecto definitivo
            </a>
          </li>
          <li>
            <a href="/files/anuncio_de_inicio.pdf" download="anuncio de inicio">
              Anúncio de início
            </a>
          </li>
        </ul>
      </Links>
    </Container>
  );
};

export default CompanyInfos;
