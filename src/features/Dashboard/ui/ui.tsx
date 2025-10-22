import { AboutSection } from "@features/aboutUs";
import Welcome from "./welcome";
import { ProductSection } from "@features/products";
import { ServicesSection } from "@features/services";

function Ui() {
  return (
    <>
    <Welcome />
    <AboutSection />
    <ProductSection />
    <ServicesSection />
    </>
  );
}

export { Ui };