import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import ProfilPage from "@/components/main/ProfilPage";
import Sponsors from "@/components/main/Sponsors";
import CardProfil from "@/components/main/CardProfil";
import ProfilGrid from "@/components/main/ProfilGrid";
import Footer from "@/components/main/Footer";

// Page principale
export default function Profil() {
  return (
    <>
      <Header/>
      <Hero/>
      <ProfilPage/>
      <Sponsors/>
      <CardProfil/>
      <ProfilGrid/>
      <Footer/>
    </>
  );
}