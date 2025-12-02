import { AboutSection } from '@features/aboutUs'
import { ContactUsSection } from '@features/contactUs'
import { ProductSection } from '@features/products'
import { ServicesSection } from '@features/services'
// import { TestimonialSection } from '@features/testimonial'
import { WhyUsSection } from '@features/WhyChooseUs'

import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      <AboutSection />
      <ProductSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactUsSection />
      {/* <TestimonialSection /> */}
    </>
  )
}

export { Ui }
