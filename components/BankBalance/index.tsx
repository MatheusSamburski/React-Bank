import { Text } from "react-native";
import {
  ContainerMyBalance,
  ContainerMyBalanceAndExtract,
  ContainerViewMyExtract,
  MyBalance,
  TextMyBalance,
  TextTotalBalance,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function BankBalance() {
  return (
    <ContainerMyBalanceAndExtract>
      <ContainerMyBalance>
        <TextMyBalance>Meu saldo</TextMyBalance>
        <MyBalance>
          <Text>R$</Text>
          <TextTotalBalance>1000</TextTotalBalance>
          <AntDesign name="eyeo" size={20} color="black" />
        </MyBalance>
      </ContainerMyBalance>

      <ContainerViewMyExtract>
        <Link href="/(tabs)/Transactions">
        <Text>Ver meu extrato</Text>
        <AntDesign name="right" size={18} color="black" />
        </Link>
      </ContainerViewMyExtract>
    </ContainerMyBalanceAndExtract>
  );
}
