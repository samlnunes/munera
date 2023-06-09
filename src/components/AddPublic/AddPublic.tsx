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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    try {
      const constraints = { video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Erro ao acessar a câmera:", error);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        const videoElement = videoRef.current as any;
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
      } else {
        const documentElement = document.documentElement as any;
        if (documentElement.exitFullscreen) {
          documentElement.exitFullscreen();
        } else if (documentElement.mozCancelFullScreen) {
          documentElement.mozCancelFullScreen();
        } else if (documentElement.webkitExitFullscreen) {
          documentElement.webkitExitFullscreen();
        } else if (documentElement.msExitFullscreen) {
          documentElement.msExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const photoData = canvas.toDataURL("image/png");
        // Faça o que precisar com a foto capturada (por exemplo, exiba-a em uma imagem)
        console.log(photoData);
      }
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
      <video ref={videoRef} />
      <button onClick={startCamera}>Iniciar Câmera</button>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
      </button>
      {isFullscreen && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 9999,
          }}
        >
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <button onClick={takePhoto}>Capturar Foto</button>
        </div>
      )}
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
