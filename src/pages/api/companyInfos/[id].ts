import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  company: string;
  likes: number;
  id: string;
  icon: string;
  description: string;
  brokers: Number[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  const company: Data = {
    id: id as string,
    company: "Nubank",
    likes: 32,
    icon: "/nu-icon.png",
    brokers: [1, 2, 3],
    description:
      "Nubank é a plataforma de investimentos do Nubank pensada para os clientes que buscam por diversificação e variedade de produtos na hora de investir. Tudo isso com o melhor histórico possível: o pioneirismo de mercado e solidez herdados da Easynvest.",
  };
  res.status(200).json(company);
}
