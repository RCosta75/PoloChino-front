import Footer from "../Footer";
import Header from "../header/Header";
import AboutIntro from "./AboutIntro";
import AboutMiddle from "./AboutMiddle";
import AboutTeam from "./AboutTeam";
import AboutTestimonials from "./AboutTestimonials";

export default function About() {
  return (
    <div className="w-full h-full">
      <Header />
      <AboutIntro />
      <AboutMiddle />
      <AboutTeam />
      <AboutTestimonials />
      <Footer />
    </div>
  );
}
