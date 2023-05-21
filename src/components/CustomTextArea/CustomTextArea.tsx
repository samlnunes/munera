import React, { useEffect, useState, useRef } from "react";
import { Container, TextArea } from "./styles";

interface TextareaProps {
  onSubmit: (text: string) => void;
  value: string;
}

const Textarea: React.FC<TextareaProps> = ({ onSubmit, value }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustHeight();
  }, []);

  const adjustHeight = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    // Você também pode lidar com qualquer outra lógica relacionada à mudança de valor da textarea aqui
  };

  return (
    <Container>
      <TextArea
        ref={textAreaRef}
        placeholder="Escreva uma publicação..."
        value={value}
        onChange={(e) => {
          onSubmit(e.target.value), handleChange(e);
        }}
      />
    </Container>
  );
};

export default Textarea;
