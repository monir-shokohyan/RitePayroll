import { AboutUsSection } from '@features/aboutUs'
import { ActionSection } from '@features/actionSection'
import { AdvantageSection } from '@features/advantage'
import { ContactUsSection } from '@features/contactUs'
import { FeaturesSection } from '@features/features'
import { IndustriesSection } from '@features/industries'

import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      <AboutUsSection />
      <AdvantageSection />
      <ActionSection />
      <FeaturesSection />
      <IndustriesSection />
      <ContactUsSection />
    </>
  )
}

export { Ui }
