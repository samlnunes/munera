import { Container, Nav, Content } from "./styles";

const Study: React.FC = () => {
  return (
    <Container>
      <Nav>
        <h1>Conteúdo</h1>
        <ul>
          <li className="active">O que é um IPO?</li>
          <li>Tipos de Ofertas</li>
          <li>Prospecto Preliminar</li>
          <li>Bookbuilding</li>
          <li>Como reservar</li>
        </ul>
      </Nav>
      <Content>
        <p>
          IPO é a sigla em inglês para Oferta Pública Inicial, que é um processo
          pelo qual uma empresa oferece suas ações para o público em geral pela
          primeira vez. É um processo complexo e regulamentado que envolve a
          venda de ações da empresa em um mercado público, como a bolsa de
          valores.
        </p>
        <p>
          O objetivo principal do IPO é levantar capital para a empresa,
          permitindo que ela possa financiar projetos de investimento, pagar
          dívidas ou expandir suas operações. Além disso, o IPO também pode
          oferecer liquidez para acionistas existentes da empresa que desejam
          vender suas participações.
        </p>
        <p>
          Durante o processo de IPO, a empresa trabalha com bancos de
          investimento para definir o preço de suas ações, a quantidade a ser
          vendida e a estratégia de marketing para atrair investidores. A
          empresa também precisa cumprir uma série de regulamentações e
          obrigações legais, incluindo a divulgação de informações financeiras e
          outras informações importantes para os investidores.
        </p>
        <p>
          Uma vez que as ações são vendidas na oferta pública inicial, elas
          começam a ser negociadas publicamente no mercado, permitindo que
          investidores comprem e vendam ações da empresa livremente. O sucesso
          do IPO pode ser medido pela demanda das ações no mercado, bem como
          pela capacidade da empresa de manter um bom desempenho financeiro e
          operacional após o IPO.
        </p>
        <iframe height='620' src="https://www.youtube.com/embed/3QwPLMthvYQ"></iframe>
      </Content>
    </Container>
  );
};

export default Study;
