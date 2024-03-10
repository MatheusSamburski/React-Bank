import { Button, Text } from "react-native";
import {
  ContainerButtonSubmitLoginUser,
  ContainerInput,
  ContainerInputsNameAndPassword,
  ContainerUserLogin,
  InputUserLogin,
  TextErrorInput,
  TextLabelInput,
  TextUserLogin,
} from "./styles";
import { router } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useController, useForm } from "react-hook-form";

const createLoginUserSchema = z.object({
  email: z
    .string()
    .min(1, "O email é obrigatório")
    .email("Formato de email inválido"),
  password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres"),
});

type CreateUserFromData = z.infer<typeof createLoginUserSchema>;

export default function LoginArea() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserFromData>({
    resolver: zodResolver(createLoginUserSchema),
  });

  function createUser() {
    router.navigate("/(tabs)/Home");
  }

  const Input = ({ name, control, placeholder }: any) => {
    const { field } = useController({
      control,
      defaultValue: "",
      name,
    });

    return (
      <InputUserLogin
        placeholder={placeholder}
        value={field.value}
        onChangeText={field.onChange}
      />
    );
  };

  return (
    <ContainerUserLogin>
      <TextUserLogin>
        Seja bem vindo ao nosso banco, efetue seu login.
      </TextUserLogin>

      <ContainerInputsNameAndPassword>
        <ContainerInput>
          <TextLabelInput>Email:</TextLabelInput>
          <Input
            placeholder="Digite seu email"
            name="email"
            control={control}
          />
          {errors.email && (
            <TextErrorInput>{errors.email.message}</TextErrorInput>
          )}
        </ContainerInput>

        <ContainerInput>
          <TextLabelInput>Senha:</TextLabelInput>
          <Input
            placeholder="Digite sua senha"
            name="password"
            control={control}
          />
          {errors.password && (
            <TextErrorInput>{errors.password.message}</TextErrorInput>
          )}
        </ContainerInput>

        <ContainerButtonSubmitLoginUser>
          <Button
            title="Entrar"
            onPress={handleSubmit(createUser)}
            color="green"
          />
        </ContainerButtonSubmitLoginUser>
      </ContainerInputsNameAndPassword>
    </ContainerUserLogin>
  );
}
