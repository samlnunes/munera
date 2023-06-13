import { BoxOffers, Loader } from "@/components";
import { Container } from "./styles";
import { useCompanies } from "@/services";

const Offers: React.FC = () => {
  const { companies, loading } = useCompanies();

  return (
    <Container>
      <Loader isActive={loading} />
      {companies?.map((offer: any, key: number) => (
        <BoxOffers
          key={key}
          logo={`${process.env.NEXT_PUBLIC_S3}/logos/${offer?.id_empresa}-logo.png`}
          title={offer.nome}
          code={offer.id_empresa}
        />
      ))}
    </Container>
  );
};

export default Offers;
