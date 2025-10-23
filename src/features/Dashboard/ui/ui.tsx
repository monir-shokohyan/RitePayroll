import { AboutSection } from "@features/aboutUs";
import Welcome from "./welcome";
import { ProductSection } from "@features/products";
import { ServicesSection } from "@features/services";
import { WhyUsSection } from "@features/WhyChooseUs";
import { ContactUsSection } from "@features/contactUs";
import { TestimonialSection } from "@features/testimonial";

function Ui() {
  return (
    <>
    <Welcome />
    <AboutSection />
    <ProductSection />
    <ServicesSection />
    <WhyUsSection />
    <ContactUsSection />
    <TestimonialSection />
    </>
  );
}

export { Ui };