import { useState } from "react";
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
import { useRef } from "react";

interface AddPublicProps {
  mutatePublics: any;
}

interface FileMeta {
  id: string;
  file: IFileWithMeta;
}

const AddPublic: React.FC<AddPublicProps> = ({ mutatePublics }) => {
  const [files, setFiles] = useState<FileMeta[]>([]);
  const [message, setMessage] = useState("");
  const [showDropzone, setShowDropzone] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [photoData, setPhotoData] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCamera = async () => {
    try {
      const constraints = { video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("click", () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        });
      }
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context!.drawImage(video, 0, 0, canvas.width, canvas.height);

      const photoData = canvas.toDataURL("image/png");
      setPhotoData(photoData);
      console.log(photoData);
    }
  };

  const onSubmit = () => {
    setIsLoading(true);
    const payload = {
      legenda: message,
      midia: imageData ?? "",
      idEmpresa: 1,
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
      <Loader isActive={isLoading} />
      <h1>Publicações</h1>
      <video ref={videoRef} autoPlay></video>
      {photoData && <img src={photoData} alt="Foto Tirada" />}
      <button onClick={startCamera}>Iniciar Câmera</button>
      <button onClick={takePhoto}>Tirar Foto</button>
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
