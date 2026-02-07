import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Discretion from "@/components/sections/Discretion";
import Trust from "@/components/sections/Trust";
import EmailCapture from "@/components/sections/EmailCapture";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Discretion />
      <Trust />
      <EmailCapture />
      <BlogPreview />
      <FAQ />
      <Contact />
    </>
  );
}
