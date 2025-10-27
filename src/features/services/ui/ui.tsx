import VerWrapper from "@shared/ui/VerWrapper";
import ServicesGroup from "./srvicesGroup";
import { memo } from "react";


const Ui = memo(() => {
  return (
      <section id="dashboard-services-section">
    <VerWrapper sectionTitle="Services" title="What We Offer">
       <ServicesGroup />
    </VerWrapper>
      </section>
  );
})

export { Ui };


