import About from "./Components/about/page";
import Contact from "./Components/contact/page";
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
      <Contact />
      <Footer />
    </>
  );
}
