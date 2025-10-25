import VerWrapper from "@shared/ui/VerWrapper";
import ServicesGroup from "./srvicesGroup";


function Ui() {
  return (
      <section id="dashboard-services-section">
    <VerWrapper sectionTitle="Services" title="What We Offer">
       <ServicesGroup />
    </VerWrapper>
      </section>
  );
}

export { Ui };


