import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Top, Description, ContentLogo, BoxBroker, BoxInfos } from "./styles";
import { brokers } from "@/utils/brokers";

interface ICompany {
  company: string;
  likes: number;
  id: string;
  icon: string;
  description: string;
  brokers: Number[];
}

const CompanyInfos: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [companyInfos, setCompanyInfos] = useState<ICompany>();

  const findBroker = (id: Number) => {
    const found = brokers.find((broker) => broker.code === id);

    return found;
  };

  useEffect(() => {
    if (!id) return;

    fetch(`/api/companyInfos/${id}`)
      .then((response) => response.json())
      .then((company) => {
        setCompanyInfos(company);
      })
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <Container>
      <Top>
        <ContentLogo>
          <img src={companyInfos?.icon} alt="" />
        </ContentLogo>
        <BoxInfos>
          <h1>{companyInfos?.company}</h1>
          <span>{companyInfos?.likes} curtidas</span>
          <div>
            {companyInfos?.brokers.map((broker, key) => (
              <BoxBroker key={key}>
                <img src={findBroker(broker)?.icon} alt="" />
              </BoxBroker>
            ))}
          </div>
        </BoxInfos>
      </Top>
      <Description>
        <p>{companyInfos?.description}</p>
      </Description>
    </Container>
  );
};

export default CompanyInfos;
