import { BoxOffers } from "@/components";
import { Container } from "./styles";
import { useEffect, useState } from "react";

const Offers: React.FC = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/api/offers")
      .then((response) => response.json())
      .then((offers) => {
        setOffers(offers);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <Container>
      {offers?.map((offer, key) => (
        <BoxOffers key={key} logo={offer.logo} title={offer.title} code={offer.codeCompany}/>
      ))}
    </Container>
  );
};

export default Offers;
