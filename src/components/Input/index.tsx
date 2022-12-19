import React from "react";
import { InputContainer } from "./styles.ts";
import { IInput } from "./types";
import { Controller } from "react-hook-form";

const Input = ({
  lefticon,
  name,
  placeHolder,
  errorMessage,
  control,
}: IInput) => {
  return (
    <InputContainer>
      {lefticon ? <img src={lefticon} /> : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            placeholder={placeHolder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
      />
      {errorMessage ? <p>{errorMessage}</p> : null}
    </InputContainer>
  );
};

export { Input };
