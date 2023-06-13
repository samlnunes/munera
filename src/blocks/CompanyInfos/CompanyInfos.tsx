import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Container,
  Top,
  Description,
  ContentLogo,
  BoxBroker,
  BoxInfos,
} from "./styles";
import { brokers } from "@/utils/brokers";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
        <ContentLogo>
          <img
            src={`${process.env.NEXT_PUBLIC_S3}/logos/${companyInfos?.id_empresa}-logo.png`}
            alt=""
          />
        </ContentLogo>
        <BoxInfos>
          <div>
            <h1>{companyInfos?.nome} </h1>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sapiente
          sint esse rerum eum accusantium veniam quibusdam, nemo numquam
          voluptates! Expedita velit quos veritatis, nobis repellendus inventore
          sequi voluptatum ullam?
        </p>
      </Description>
    </Container>
  );
};

export default CompanyInfos;
