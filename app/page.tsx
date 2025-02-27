import EdcsToogleCategories from "./components/EdcsToogleCategories";
import EnrolleesChart from "./components/EnrolleesChart";
import FooterSection from "./components/FooterSection";
import FAQSection from "./components/FrequentSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContainerUser from "./components/how-it-works/ContainerUser";
import TopComponent from "./components/TopComponent";

export default function Home() {
  return (
    <section className="w-full h-[90vh]">
      <Header />
      <TopComponent />
      <EnrolleesChart/>
      <EdcsToogleCategories />
      <ContainerUser/>
      <FAQSection />
      <HeroSection/>
      <FooterSection/>
    </section>
  );
}
