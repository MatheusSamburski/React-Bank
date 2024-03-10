import React from "react";
import { FlatList } from "react-native";
import {
  ContainerListServiceSection,
  ContainerServices,
  TextService,
} from "./styles";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const SERVICES = [
  {
    icon: (
      <MaterialCommunityIcons name="bank-outline" size={18} color="black" />
    ),
    title: "Transações",
  },
  {
    icon: <AntDesign name="barcode" size={18} color="black" />,
    title: "Pagamentos",
  },
  {
    icon: <AntDesign name="creditcard" size={18} color="black" />,
    title: "Cartões",
  },
  {
    icon: <MaterialIcons name="pix" size={18} color="black" />,
    title: "Pix",
  },
];

interface ServiceProps {
  title: string;
  icon: React.JSX.Element;
}

const Services = ({ icon, title }: ServiceProps) => (
  <ContainerServices>
    {icon}
    <TextService>{title}</TextService>
  </ContainerServices>
);

export default function ServiceSection() {
  return (
    <ContainerListServiceSection>
      <FlatList
        data={SERVICES}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Services title={item.title} icon={item.icon} />;
        }}
      />
    </ContainerListServiceSection>
  );
}
