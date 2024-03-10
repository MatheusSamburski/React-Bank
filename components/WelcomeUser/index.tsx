import { ContainerWelcomeUser, TextWelcomeUser } from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function WelcomeUser() {
  return (
    <ContainerWelcomeUser>
      <AntDesign name="user" size={22} color="black" />
      <TextWelcomeUser>Seja bem vindo, Matheus</TextWelcomeUser>
      <Ionicons name="exit-outline" size={22} color="black" />
    </ContainerWelcomeUser>
  );
}
