import React from "react";
import { IButton } from "./types";
import { ButtonContainer } from "./styles.ts";
import { useNavigate } from "react-router-dom";
const Button = ({ text, isValid }: IButton) => {
  const navigate = useNavigate();
  const handleClickSingIn = () => {
    return isValid
      ? navigate("/logonPage")
      : null;
  };
  return (
    <>
      <ButtonContainer onClick={handleClickSingIn}>{text}</ButtonContainer>
    </>
  );
};

export { Button };
