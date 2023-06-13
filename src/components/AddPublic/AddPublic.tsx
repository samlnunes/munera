import { useEffect, useState } from "react";
import {
  Container,
  ContentPublic,
  ButtonImage,
  InputContent,
  BoxButton,
} from "./styles";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, { IFileWithMeta, StatusValue } from "react-dropzone-uploader";
import { CustomTextArea, Loader } from "..";
import ImageIcon from "@mui/icons-material/Image";
import LinearProgress from "@mui/material/LinearProgress";

interface AddPublicProps {
  mutatePublics: any;
  stateMutate: boolean;
}

interface FileMeta {
  id: string;
  file: IFileWithMeta;
}

const AddPublic: React.FC<AddPublicProps> = ({
  mutatePublics,
  stateMutate,
}) => {
  const [files, setFiles] = useState<FileMeta[]>([]);
  const [message, setMessage] = useState("");
  const [showDropzone, setShowDropzone] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [idCompany, setIdCompany] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIdCompany(localStorage.getItem("id-company"));
    }
  }, []);

  const onSubmit = () => {
    setIsLoading(true);
    const payload = {
      legenda: message,
      midia: imageData ?? "",
      idEmpresa: idCompany,
    };

    fetch(process.env.NEXT_PUBLIC_API_AUTH + "/postagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        mutatePublics();
        setMessage("");
        setFiles([]);
        setShowDropzone(false);
      })
      .catch(() => {})
      .finally(() => {
        mutatePublics();
        setMessage("");
        setFiles([]);
        setShowDropzone(false);
        setIsLoading(false);
      });
  };

  const handleChangeStatus = (file: File, status: StatusValue) => {
    const uploadedDate = new Date().toISOString();

    const fileWithMeta: IFileWithMeta = {
      file,
      meta: {
        id: "123",
        uploadedDate,
        percent: 100,
        lastModifiedDate: new Date().toISOString(),
        status,
        name: file.name,
        size: file.size,
        type: file.type,
      },
      cancel: () => {},
      restart: () => {},
      remove: () => {},
    };

    if (status === "done") {
      const fileExists = files.some(
        (fileMeta) => fileMeta.file.meta.id === fileWithMeta.meta.id
      );

      if (!fileExists) {
        setFiles((prevFiles) => [
          ...prevFiles,
          { id: fileWithMeta.meta.id, file: fileWithMeta },
        ]);
      }
    } else if (status === "removed") {
      setFiles((prevFiles) =>
        prevFiles.filter((fileMeta) => fileMeta.id !== fileWithMeta.meta.id)
      );
    }
  };

  const inputContent = (extra: any) => (
    <InputContent>
      <ImageIcon sx={{ color: "#043262" }} fontSize="large" />
      <div>
        <p>Adicionar foto</p>
        <span>ou arraste e solte</span>
        <p>{extra.reject ? "Formato de arquivo inválido" : ""}</p>
      </div>
    </InputContent>
  );

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result as string;
      const imageDataWithoutPrefix = base64Image.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ""
      );
      setImageData(imageDataWithoutPrefix);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Container>
      {(isLoading || stateMutate) && <LinearProgress />}
      <h1>Publicações</h1>
      <ContentPublic>
        <CustomTextArea onSubmit={(e) => setMessage(e)} value={message} />

        <ButtonImage onClick={() => setShowDropzone(!showDropzone)}>
          <ImageIcon sx={{ color: "#043262" }} />
        </ButtonImage>
      </ContentPublic>
      {showDropzone && (
        <Dropzone
          onChangeStatus={({ file, meta }) => {
            handleChangeStatus(file, meta.status), handleImageUpload(file);
          }}
          inputContent={inputContent}
          maxFiles={1}
          accept=".png,.jpeg,.jpg"
        />
      )}
      <BoxButton>
        <button onClick={() => onSubmit()} disabled={!message}>
          Publicar
        </button>
      </BoxButton>
    </Container>
  );
};

export default AddPublic;
