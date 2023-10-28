import { useState } from "react";
import { Container, Top, Content, BoxImage, Favorites } from "./styles";
import { dayjsUtc } from "@/helpers";
import Link from "next/link";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface IPublication {
  icon: string;
  empresaName: string;
  date_time: string;
  legenda: string;
  midia: string;
  empresaId: string;
  curtidas: number;
}

const BoxPublic: React.FC<IPublication> = ({
  empresaName,
  empresaId,
  icon,
  date_time,
  legenda,
  midia,
  curtidas,
}) => {
  const [curtidasNew, setCurtidasNew] = useState(curtidas);

  const formatterDiff = (date: string) => {
    if (dayjsUtc().diff(dayjsUtc.utc(date).local(), "hour") < 1) {
      if (dayjsUtc().diff(dayjsUtc.utc(date).local(), "minute") < 1)
        return "Agora";

      return `Há ${dayjsUtc().diff(
        dayjsUtc.utc(date).local(),
        "minute"
      )} minutos`;
    }

    if (dayjsUtc().diff(dayjsUtc.utc(date).local(), "hour") < 24)
      return `Há ${dayjsUtc().diff(dayjsUtc.utc(date).local(), "hour")} horas`;

    if (dayjsUtc().diff(dayjsUtc.utc(date).local(), "day") < 8)
      return `Há ${dayjsUtc().diff(dayjsUtc.utc(date).local(), "day")} dias`;

    return dayjsUtc.utc(date).local().format("DD [de] MMMM");
  };

  return (
    <Container>
      <Content>
        <Top>
          <Link href={`/empresas/${empresaId}`}>
            <img src={icon} alt="" loading="lazy" />
          </Link>
          <div>
            <Link href={`/empresas/${empresaId}`}>
              <h1>{empresaName}</h1>
            </Link>
            <span>{formatterDiff(date_time)}</span>
          </div>
        </Top>
        <p>{legenda}</p>
      </Content>
      {midia && (
        <BoxImage>
          <Image
            src={midia}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
        </BoxImage>
      )}
      <Favorites>
        <button onClick={() => setCurtidasNew(curtidasNew + 1)}>
          <FavoriteIcon style={{ color: "#FF0000" }} />
        </button>
        <span>{curtidasNew ?? 0}</span>
      </Favorites>
    </Container>
  );
};

export default BoxPublic;
