import React from "react";
import { useForm } from "react-hook-form";

import { Container, Title } from "./styles.ts";
import { Button } from "../../components/Button/index.tsx";
import { Input } from "../../components/Input/index.tsx";

import email from "../../assests/email.svg";
import lock from "../../assests/lock.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { defaultValues, ILogin } from "./types.ts";
const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Home = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  console.log(errors);
  return (
    <Container>
      <Title>Login Validator</Title>
      <Input
        name="email"
        lefticon={email}
        placeHolder="Email"
        control={control}
        errorMessage={errors?.email?.message}
      />
      <Input
        name="password"
        lefticon={lock}
        placeHolder="Password"
        control={control}
        errorMessage={errors?.password?.message}
      />
      <Button text="Fazer Login" isValid={isValid}/>
    </Container>
  );
};

export { Home };
