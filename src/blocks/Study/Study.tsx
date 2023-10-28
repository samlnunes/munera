import { useState } from "react";
import { Container, Nav, Content } from "./styles";

const Study: React.FC = () => {
  const [tab, setTab] = useState("ipo");

  return (
    <Container>
      <Nav>
        <h1>Conteúdo</h1>
        <ul>
          <li className={tab === "ipo" ? "active" : ""}>
            <button onClick={() => setTab("ipo")}>O que é um IPO?</button>
          </li>
          <li className={tab === "ofertas" ? "active" : ""}>
            <button onClick={() => setTab("ofertas")}>Tipos de Ofertas</button>
          </li>
          <li className={tab === "prospecto" ? "active" : ""}>
            <button onClick={() => setTab("prospecto")}>
              Prospecto Preliminar
            </button>
          </li>
          <li className={tab === "bookbuilding" ? "active" : ""}>
            <button onClick={() => setTab("bookbuilding")}>Bookbuilding</button>
          </li>
          <li className={tab === "reservar" ? "active" : ""}>
            <button onClick={() => setTab("reservar")}>Como reservar</button>
          </li>
        </ul>
      </Nav>
      {tab === "ipo" && (
        <Content>
          <p>
            IPO é a sigla em inglês para Oferta Pública Inicial, que é um
            processo pelo qual uma empresa oferece suas ações para o público em
            geral pela primeira vez. É um processo complexo e regulamentado que
            envolve a venda de ações da empresa em um mercado público, como a
            bolsa de valores.
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
            obrigações legais, incluindo a divulgação de informações financeiras
            e outras informações importantes para os investidores.
          </p>
          <p>
            Uma vez que as ações são vendidas na oferta pública inicial, elas
            começam a ser negociadas publicamente no mercado, permitindo que
            investidores comprem e vendam ações da empresa livremente. O sucesso
            do IPO pode ser medido pela demanda das ações no mercado, bem como
            pela capacidade da empresa de manter um bom desempenho financeiro e
            operacional após o IPO.
          </p>
          <iframe
            height="490"
            src="https://www.youtube.com/embed/3QwPLMthvYQ"
          />
        </Content>
      )}

      {tab === "ofertas" && (
        <Content>
          <h2>
            Desvendando os Tipos de Ofertas Públicas: O Guia Simples para
            Iniciantes
          </h2>
          <p>
            Para muitos, o mundo das finanças pode parecer um quebra-cabeça
            complexo e misterioso, repleto de termos técnicos e procedimentos
            intrincados. No entanto, uma parte essencial desse universo é a
            oferta pública, que desempenha um papel fundamental nas atividades
            das empresas e investidores. Neste guia simples, vamos explorar os
            diferentes tipos de ofertas públicas de forma acessível para leigos
            no assunto.
          </p>
          <h1>
            1. Oferta Pública Inicial (IPO): O Primeiro Passo para o Mercado de
            Ações
          </h1>
          <p>
            A Oferta Pública Inicial, ou IPO, é o ponto de partida para muitas
            empresas que desejam abrir seu capital ao público. Nesse processo, a
            empresa emite ações pela primeira vez no mercado de ações,
            permitindo que investidores individuais comprem uma parte da
            empresa. Isso não apenas gera capital para a empresa, mas também
            proporciona aos investidores a oportunidade de se tornarem
            acionistas.
          </p>
          <h1>
            2. Oferta Pública de Ações (Follow-on): Expansão e Crescimento
          </h1>
          <p>
            Quando uma empresa já está listada na bolsa de valores e deseja
            levantar mais capital, ela pode optar por uma Oferta Pública de
            Ações, também conhecida como Follow-on. Nesse caso, a empresa emite
            novas ações no mercado, permitindo que investidores existentes e
            novos adquiram essas ações. Esse processo é comum quando a empresa
            precisa de fundos adicionais para expandir seus negócios, financiar
            projetos ou pagar dívidas.
          </p>
          <h1>
            3. Oferta Pública de Títulos: Capturando o Interesse dos
            Investidores em Dívida
          </h1>
          <p>
            Nem todas as ofertas públicas envolvem ações. Muitas empresas emitem
            títulos, como debêntures e obrigações, para captar fundos. Isso é
            conhecido como Oferta Pública de Títulos. Os investidores que
            participam dessas ofertas emprestam dinheiro à empresa em troca de
            juros e a devolução do valor investido no vencimento dos títulos.
            Essa é uma maneira comum de as empresas financiarem suas operações e
            projetos de longo prazo.
          </p>
          <h1>
            4. Oferta Pública de Fundos de Investimento: Diversificação ao
            Alcance de Todos
          </h1>
          <p>
            Para aqueles que buscam diversificar seus investimentos de forma
            mais simples, as Ofertas Públicas de Fundos de Investimento são uma
            opção atraente. Esses fundos reúnem dinheiro de diversos
            investidores para investir em uma variedade de ativos, como ações,
            títulos e imóveis. Os investidores adquirem cotas do fundo,
            permitindo-lhes acesso a uma carteira diversificada, gerenciada por
            profissionais financeiros.
          </p>
          <p>
            Em resumo, as ofertas públicas desempenham um papel fundamental no
            mundo das finanças, permitindo que empresas captem fundos e
            investidores ampliem suas carteiras. Ao compreender os diferentes
            tipos de ofertas públicas, você estará mais preparado para tomar
            decisões financeiras informadas e aproveitar as oportunidades de
            investimento que surgem no mercado. É importante lembrar que, antes
            de investir, é aconselhável buscar orientação de um profissional
            financeiro para tomar decisões alinhadas com seus objetivos e
            tolerância ao risco.
          </p>
        </Content>
      )}

      {tab === "prospecto" && (
        <Content>
          <h2>
            Entendendo o Prospecto Preliminar de uma Oferta Pública: Guia
            Simplificado
          </h2>
          <p>
            Para muitos, o termo &quot;prospecto preliminar de uma oferta
            pública&quot; pode parecer uma língua estrangeira em um mundo
            financeiro complexo. No entanto, desvendar esse documento é
            fundamental para quem deseja investir em ofertas públicas. Neste
            guia simplificado, explicaremos o que é um prospecto preliminar e
            qual é o seu papel no processo de investimento, tornando-o mais
            acessível para pessoas leigas no assunto.
          </p>
          <h1>1. O Que é um Prospecto Preliminar?</h1>
          <p>
            O prospecto preliminar é um documento obrigatório emitido pelas
            empresas que planejam realizar uma oferta pública de ações. Ele
            contém informações essenciais sobre a empresa, o negócio, os riscos
            envolvidos, os planos de uso dos recursos arrecadados e outros
            detalhes relevantes. Este documento é uma ferramenta fundamental
            para que os investidores avaliem se desejam participar da oferta
            pública.
          </p>
          <h1>2. Como Usar o Prospecto Preliminar</h1>
          <p>
            Quando você encontra uma oferta pública que desperta seu interesse,
            o prospecto preliminar se torna sua bússola. Nele, você encontrará
            informações que ajudarão a tomar uma decisão informada. É importante
            observar os dados financeiros da empresa, sua estratégia de
            negócios, os riscos associados e as informações sobre os
            administradores. Certifique-se de entender as partes mais críticas
            do documento para evitar surpresas desagradáveis no futuro.
          </p>
          <h1>3. Importância da Due Diligence</h1>
          <p>
            A leitura do prospecto preliminar é apenas o primeiro passo. Muitos
            investidores consultam fontes adicionais, como análises de mercado e
            relatórios de analistas, para fazer uma due diligence completa antes
            de tomar uma decisão de investimento. Lembre-se de que, ao investir
            em uma oferta pública, você está comprando ações da empresa,
            tornando-se um acionista, o que envolve riscos e responsabilidades.
          </p>
          <h1>4. Aprovação pela SEC</h1>
          <p>
            É importante destacar que um prospecto preliminar não é um documento
            definitivo. Ele é submetido à Securities and Exchange Commission
            (SEC) nos Estados Unidos ou ao órgão regulador equivalente em outros
            países, que analisará o documento para garantir que todas as
            informações estejam corretas e transparentes. Somente após a
            aprovação da SEC, a empresa pode prosseguir com a oferta pública.
          </p>
          <p>
            Em resumo, o prospecto preliminar é o ponto de partida para qualquer
            investidor interessado em ofertas públicas. Ele fornece informações
            cruciais para avaliar a viabilidade e os riscos associados a um
            investimento. No entanto, lembre-se de que este é apenas o começo de
            sua jornada de due diligence. É aconselhável buscar orientação
            financeira ou legal para garantir que suas decisões de investimento
            estejam alinhadas com seus objetivos e tolerância ao risco.
          </p>
        </Content>
      )}

      {tab === "bookbuilding" && (
        <Content>
          <h2>Entendendo o Bookbuilding em Ofertas Públicas de Ações</h2>
          <p>
            O termo &quot;bookbuilding&quot; pode parecer complexo à primeira
            vista, mas é uma etapa importante em uma oferta pública. Neste guia
            simplificado, explicaremos o que é o bookbuilding, qual é o seu
            propósito e como ele afeta investidores, tornando-o mais acessível
            para quem não está familiarizado com o assunto.
          </p>
          <h1>1. O Que é o Bookbuilding?</h1>
          <p>
            O bookbuilding é um processo crucial que ocorre durante a preparação
            de uma oferta pública de ações. É um método pelo qual a empresa
            emissora, juntamente com os subscritores ou underwriters, determina
            o preço de emissão das ações a serem oferecidas ao público. Esse
            preço é fundamental, pois afeta o valor que os investidores pagarão
            pelas ações na IPO.
          </p>
          <h1>2. Como Funciona o Bookbuilding?</h1>
          <p>
            Durante o processo de bookbuilding, os underwriters (instituições
            financeiras envolvidas na oferta) consultam investidores
            institucionais e potenciais compradores para avaliar o interesse e a
            demanda pelas ações da empresa. Eles coletam as ordens de compra com
            os preços propostos pelos investidores. Com base nesse feedback, os
            underwriters ajustam o preço das ações para alcançar um equilíbrio
            entre a maximização dos fundos arrecadados e a atração de
            investidores.
          </p>
          <h1>3. Participação dos Investidores Individuais</h1>
          <p>
            Embora o processo de bookbuilding envolva principalmente
            investidores institucionais, investidores individuais também podem
            participar, geralmente por meio de corretoras que atuam como
            intermediários. É importante que os investidores individuais
            compreendam o processo, pois o preço final das ações na oferta
            pública pode ser influenciado pelas ordens de compra desses
            participantes.
          </p>
          <h1>4. Definindo o Preço de Emissão</h1>
          <p>
            No final do processo de bookbuilding, os underwriters determinam o
            preço de emissão das ações com base nas ordens recebidas e na
            demanda do mercado. Esse preço é conhecido como preço de oferta ou
            preço de emissão. É o preço pelo qual as ações serão vendidas ao
            público durante a oferta pública inicial (IPO).
          </p>
          <h1>5. Benefícios do Bookbuilding</h1>
          <p>
            O bookbuilding é um método eficaz para estabelecer preços de ações
            que refletem a demanda real do mercado, garantindo que a oferta seja
            bem-sucedida e que a empresa arrecade os fundos necessários. Para os
            investidores, isso ajuda a evitar cenários de superavaliação ou
            subavaliação das ações no mercado secundário após a IPO.
          </p>
          <p>
            Em resumo, o bookbuilding desempenha um papel crucial no processo de
            uma oferta pública, determinando o preço pelo qual as ações serão
            disponibilizadas aos investidores. Embora possa parecer complexo, é
            um processo projetado para garantir uma precificação justa e
            equitativa das ações, beneficiando tanto a empresa emissora quanto
            os investidores. À medida que você explora oportunidades de
            investimento em ofertas públicas, entender o bookbuilding pode
            ajudá-lo a tomar decisões financeiras mais informadas.
          </p>
        </Content>
      )}

      {tab === "reservar" && (
        <Content>
          <h2>Como Reservar uma Oferta Pública: Passo a Passo</h2>
          <p>
            Reservar uma oferta pública pode parecer uma tarefa complicada à
            primeira vista, mas com as informações certas, esse processo pode
            ser mais simples do que você imagina. Neste guia passo a passo,
            vamos explicar como reservar uma oferta pública de forma acessível
            para iniciantes, para que você possa participar de oportunidades de
            investimento emocionantes.
          </p>
          <h1>Passo 1: Escolher uma Corretora</h1>
          <p>
            O primeiro passo é escolher uma corretora de valores confiável. Ela
            atuará como intermediária entre você e a oferta pública.
            Certifique-se de que a corretora ofereça acesso a ofertas públicas e
            esteja registrada nos órgãos reguladores. Você pode fazer essa
            escolha com base em taxas, atendimento ao cliente e plataforma de
            negociação.
          </p>
          <h1>Passo 2: Abrir uma Conta na Corretora</h1>
          <p>
            Depois de escolher a corretora, será necessário abrir uma conta.
            Esse processo envolve o preenchimento de formulários, fornecimento
            de documentos de identificação e informações financeiras básicas.
            Certifique-se de ler e entender os termos e condições da corretora
            antes de prosseguir.
          </p>
          <h1>Passo 3: Verificar Disponibilidade da Oferta</h1>
          <p>
            Verifique se a corretora que você escolheu oferece acesso à oferta
            pública que você deseja participar. Nem todas as corretoras oferecem
            acesso a todas as ofertas públicas, portanto, certifique-se de que a
            oferta desejada esteja disponível.
          </p>
          <h1>Passo 4: Reservar as Ações</h1>
          <p>
            Após abrir sua conta na corretora e verificar a disponibilidade da
            oferta pública, você poderá reservar as ações. Isso geralmente
            envolve fornecer informações sobre quantas ações deseja adquirir e a
            que preço. O processo de reserva pode variar dependendo da
            corretora, mas geralmente é feito por meio da plataforma online da
            corretora.
          </p>
          <h1>Passo 5: Aguardar Confirmação</h1>
          <p>
            Depois de reservar as ações, você precisará aguardar a confirmação.
            A corretora analisará sua reserva e, se for bem-sucedida, confirmará
            a alocação das ações. Lembre-se de que a alocação pode ser parcial,
            dependendo da demanda e do número de ações disponíveis.
          </p>
          <h1>Passo 6: Efetuar o Pagamento</h1>
          <p>
            Após a confirmação da reserva, você receberá instruções sobre como
            efetuar o pagamento. Geralmente, você precisará transferir os fundos
            necessários para a corretora dentro do prazo especificado.
            Certifique-se de cumprir os prazos para garantir a aquisição das
            ações.
          </p>
          <h1>Passo 7: Acompanhar o Processo</h1>
          <p>
            Após efetuar o pagamento, acompanhe o processo de alocação das ações
            e o andamento da oferta pública. Mantenha-se informado sobre datas
            importantes, como a data de listagem das ações em uma bolsa de
            valores, caso seja uma Oferta Pública Inicial (IPO).
          </p>
          <p>
            Lembre-se de que participar de ofertas públicas pode variar em
            complexidade, dependendo do mercado e da corretora. Este guia
            fornece um roteiro geral, mas é fundamental que você esteja ciente
            das especificidades de cada oferta e busque orientação profissional,
            se necessário, para tomar decisões de investimento bem informadas.
          </p>
        </Content>
      )}
    </Container>
  );
};

export default Study;
