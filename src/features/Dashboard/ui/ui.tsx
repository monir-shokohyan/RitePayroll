import { AboutSection } from '@features/aboutUs'
import { AddonSections } from '@features/addon'
import { ContactUsSection } from '@features/contactUs'
import { EditionsSection } from '@features/editions'
import { FeaturesSection } from '@features/features'
import { IndustriesSection } from '@features/industries'
import { ProductSection } from '@features/products'
import { ServicesSection } from '@features/services'

// import { TestimonialSection } from '@features/testimonial'
import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      {/* <AboutSection /> */}
      {/* <ProductSection /> */}
      {/* <ServicesSection /> */}
      <EditionsSection />
      <FeaturesSection />
      <AddonSections />
      <IndustriesSection />
      <ContactUsSection />
      {/* <TestimonialSection /> */}
    </>
  )
}

export { Ui }
