import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Divider />
        <Program />
        <Divider />
        <News />
        <Divider />
        <Gallery />
        <Divider />
        <Team />
        <Divider />
        <About />
      </main>
      <Footer />
    </>
  );
}
