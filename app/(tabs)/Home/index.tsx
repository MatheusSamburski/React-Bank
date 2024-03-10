import BankBalance from "@/components/BankBalance";
import Header from "@/components/Header";
import ServiceSection from "@/components/ServiceSection";
import WelcomeUser from "@/components/WelcomeUser";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header title="ReactBank" icons />

      {/* Welcome User */}
      <WelcomeUser />

      {/* Saldo bancário */}
      <BankBalance />

      {/* Service Section */}
      <ServiceSection />
    </>
  );
}
