import { Container, Top } from "./styles";

const BoxPublic: React.FC = () => {
  return (
    <Container>
      <Top>
        <img src="/nu-icon.png" alt="" />
        <div>
          <h1>NuInvest</h1>
          <span>1 hours ago</span>
        </div>
      </Top>
      <p>
        Conheça a Nu Invest, a plataforma de investimentos subsidiária do
        Nubank. Com interface intuitiva e segurança regulamentada pela CVM,
        permite investimentos em diversos ativos e oferece ferramenta de
        recomendação personalizada. A plataforma também oferece recursos
        educacionais para ajudar investidores a tomar decisões informadas. A Nu
        Invest é a opção ideal para quem busca acessibilidade e inovação nos
        investimentos.
      </p>
      <img src="/BDRsNubank.jpg" alt="" />
    </Container>
  );
};

export default BoxPublic;
