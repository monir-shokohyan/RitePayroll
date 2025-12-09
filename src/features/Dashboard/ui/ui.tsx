import { AboutSection } from '@features/aboutUs'
import { ContactUsSection } from '@features/contactUs'
import { IndustriesSection } from '@features/industries'
import { ProductSection } from '@features/products'
import { ServicesSection } from '@features/services'

// import { TestimonialSection } from '@features/testimonial'
import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <AboutSection /> */}
      {/* <ProductSection /> */}
      {/* <ServicesSection /> */}
      <IndustriesSection />
      <ContactUsSection />
      {/* <TestimonialSection /> */}
    </>
  )
}

export { Ui }
