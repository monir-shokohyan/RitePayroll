import VerWrapper from "@shared/ui/VerWrapper";
import ServicesGroup from "./srvicesGroup";


function Ui() {
  return (
      <section id="services">
    <VerWrapper sectionTitle="Services" title="What We Offer">
       <ServicesGroup />
    </VerWrapper>
      </section>
  );
}

export { Ui };


