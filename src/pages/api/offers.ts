import type { NextApiRequest, NextApiResponse } from "next";

type DocumentsData = {
  title: string;
  url: string;
};

type Data = {
  company: string;
  codeCompany: string;
  title: string;
  id: number;
  logo: string;
  date: string;
  documents: DocumentsData[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const publications: Data[] = [
    {
      id: 1,
      company: "CBTU-MG",
      codeCompany: "0001",
      documents: [
        {
          title: "Manual dos Empregados e Aposentados",
          url: "https://www.b3.com.br/data/files/9E/F3/EF/15/7311881036DB3088AC094EA8/ANEXO_11-Manual_de_Oferta_aos_Empregados_e_Aposentados.pdf",
        },
        {
          title:
            "Manual B3 de Procedimentos da Oferta aos Empregados e Aposentados",
          url: "https://www.b3.com.br/data/files/11/04/C2/25/7311881036DB3088AC094EA8/ANEXO_12-Manual_B3_de_Oferta_aos_Empregados_e_Aposentados.pdf",
        },
        {
          title: "Edital do Leilão - 02/2022",
          url: "https://www.b3.com.br/data/files/73/04/15/25/7311881036DB3088AC094EA8/Edital_Leilao_BNDES_02-2022_VDMG_e_CBTU-MG.pdf",
        },
      ],
      title: "Desestatização – Oferta aos Empregados e Aposentados – CBTU-MG",
      date: "2023-04-02T10:02:31",
      logo: "/cbtu-logo.jpeg",
    },
    {
      id: 2,
      company: "ORIZON",
      codeCompany: "0002",
      documents: [
        {
          title: "Fato Relevante - 27/04/2023",
          url: "https://www.b3.com.br/data/files/59/B6/ED/FD/978C781064456178AC094EA8/Fato%20Relevante_ORIZON_28.04.2023_preco.pdf",
        },
        {
          title: "Aviso ao Mercado - 24/04/2023",
          url: "https://www.b3.com.br/data/files/0B/41/90/38/2D3B781064456178AC094EA8/Green%202%20-%20Aviso%20ao%20Mercado%20_reapresentacao_%20_23abr23_%20-%20final.pdf",
        },
        {
          title: "Manual de Procedimentos Operacionais - 19/04/2023",
          url: "https://www.b3.com.br/data/files/CD/24/8E/8B/7999781064456178AC094EA8/ORIZON%20-%20Follow-on%20-%20Manual%20de%20Procedimentos%20Operacionais.pdf",
        },
      ],
      title:
        "Oferta para Investidores Profissionais (Com Prioritária) - ORIZON VALORIZAÇÃO DE RESÍDUOS S.A. (Ações Ordinárias)",
      date: "2023-04-02T09:02:31",
      logo: "/orizon-logo.jpeg",
    },
    {
      id: 3,
      company: "DAZA",
      codeCompany: "0003",
      documents: [
        {
          title: "Fato Relevante - 18/04/2023",
          url: "https://www.b3.com.br/data/files/3A/85/8B/8B/0799781064456178AC094EA8/Fato%20Relevante_DASA_18.04.2023.pdf",
        },
        {
          title: "Aviso ao Mercado - 04/04/2023",
          url: "https://www.b3.com.br/data/files/1F/84/00/6E/6CC4781064456178AC094EA8/Projeto%20Aurora%20-%20Aviso%20ao%20Mercado%20_%20Oferta%20Publica%20de%20Acoes.pdf",
        },
        {
          title: "Pedido de Subscrição - 04/04/2023",
          url: "https://www.b3.com.br/data/files/5E/30/23/CC/07E4781064456178AC094EA8/Projeto%20Aurora%20-%20Pedido%20de%20Subscricao%20Prioritaria%20_VF__04.04__48338886.6_.pdf",
        },
      ],
      title:
        "Oferta para Investidores Profissionais (Com Prioritária) - DIAGNÓSTICOS DA AMÉRICA S.A. (Ações Ordinárias e Bônus de Subscrição)",
      date: "2023-04-02T09:02:31",
      logo: "/dasa-logo.jpg",
    },
  ];
  res.status(200).json(publications);
}
