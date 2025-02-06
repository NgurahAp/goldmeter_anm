import AboutUs from "../components/landingPage/AboutUsSection";
import { ContactUs } from "../components/landingPage/ContactUsSection";
import HeroSection from "../components/landingPage/HeroSection";
import HowToOrder from "../components/landingPage/HowToOrderSection";
import Products from "../components/landingPage/ProductsSection";
import Testimonial from "../components/landingPage/TestimonialSection";
import WhyUs from "../components/landingPage/WhyUsSection";

export default function Landing() {
  return (
    <article className="font-poppins pt-16 md:pt-24">
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <Products />
      <HowToOrder />
      <Testimonial />
      <ContactUs />
    </article>
  );
}
