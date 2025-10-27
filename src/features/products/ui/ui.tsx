import VerWrapper from "@shared/ui/VerWrapper";
import ProductGroup from "./productGroup";
import { memo } from "react";


const Ui = memo(() => {
  return (
    <section id="dashboard-products-section">
    <VerWrapper sectionTitle="Products" title="Lotus Soft Technologies offers a suite of integrated business software products designed for diverse industries.">
       <ProductGroup />
    </VerWrapper>
    </section>
  );
})

export { Ui };


