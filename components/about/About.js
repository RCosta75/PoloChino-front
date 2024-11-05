import Footer from "../Footer";
import Header from "../header/Header";
import AboutIntro from "./AboutIntro";
import AboutMiddle from "./AboutMiddle";
import AboutStats from "./AboutStats";
import AboutTeam from "./AboutTeam";
import AboutTestimonials from "./AboutTestimonials";

export default function About() {
  return (
    <div className="w-full h-full">
      <Header />
      <AboutIntro />
      <AboutMiddle />
      <AboutTeam />
      <AboutStats />
      <AboutTestimonials />
      <Footer />
    </div>
  );
}
