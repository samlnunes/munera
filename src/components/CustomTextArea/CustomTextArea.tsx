import React, { useEffect, useState } from "react";
import { Container, TextArea } from "./styles";

interface TextareaProps {
  onSubmit: (text: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    onSubmit(text);
  }, [text, onSubmit]);

  return (
    <Container>
      <TextArea
        placeholder="Escreva uma publicação..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Container>
  );
};

export default Textarea;
