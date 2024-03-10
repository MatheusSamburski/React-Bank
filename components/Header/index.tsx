import { Link } from "expo-router";
import { HeaderContainer, TitleBank } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  icons: boolean;
}

export default function Header({ title, icons }: HeaderProps) {
  return (
    <HeaderContainer>
      <Link href="/(tabs)/Profile">
        {icons && <Ionicons name="menu-outline" size={24} color="black" />}
      </Link>
      <TitleBank>{title}</TitleBank>
      {icons && (
        <Ionicons name="notifications-outline" size={22} color="black" />
      )}
    </HeaderContainer>
  );
}
