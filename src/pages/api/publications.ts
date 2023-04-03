import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  company: string;
  codeCompany: string;
  id: number;
  date: string;
  content: string;
  img: string;
  icon: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const publications: Data[] = [
    {
      id: 1,
      company: "NuInvest",
      codeCompany: "1234",
      date: "2023-04-02T10:02:31",
      content:
        "Conheça a Nu Invest, a plataforma de investimentos subsidiária do Nubank. Com interface intuitiva e segurança regulamentada pela CVM, permite investimentos em diversos ativos e oferece ferramenta de recomendação personalizada. A plataforma também oferece recursos educacionais para ajudar investidores a tomar decisões informadas. A Nu Invest é a opção ideal para quem busca acessibilidade e inovação nos investimentos.",
      img: "/nubank-image.jpg",
      icon: "/nu-icon.png",
    },
    {
      id: 2,
      company: "NuInvest",
      codeCompany: "1234",
      date: "2023-04-02T09:02:31",
      content:
        "Conheça a Nu Invest, a plataforma de investimentos subsidiária do Nubank. Com interface intuitiva e segurança regulamentada pela CVM, permite investimentos em diversos ativos e oferece ferramenta de recomendação personalizada. A plataforma também oferece recursos educacionais para ajudar investidores a tomar decisões informadas. A Nu Invest é a opção ideal para quem busca acessibilidade e inovação nos investimentos.",
      img: "/nubank-image.jpg",
      icon: "/nu-icon.png",
    }
  ]
  res.status(200).json(publications);
}
