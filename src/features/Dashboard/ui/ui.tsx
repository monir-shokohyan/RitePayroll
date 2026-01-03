import { AboutUsSection } from '@features/aboutUs'
import { AddonSections } from '@features/addon'
import { ContactUsSection } from '@features/contactUs'
import { FeaturesSection } from '@features/features'
import { IndustriesSection } from '@features/industries'

import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      <AboutUsSection />
      <FeaturesSection />
      <AddonSections />
      <IndustriesSection />
      <ContactUsSection />
    </>
  )
}

export { Ui }
