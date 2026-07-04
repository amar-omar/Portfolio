import About from "./Components/about/page";
import Footer from "./Components/footer/page";
import Header from "./Components/header/page";
import Navbar from "./Components/navbar/page";
import Services from "./Components/services/page";
import Work from "./Components/work/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Footer />
    </>
  );
}
