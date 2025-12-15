import { AddonSections } from '@features/addon'
import { ContactUsSection } from '@features/contactUs'
import { EditionsSection } from '@features/editions'
import { FeaturesSection } from '@features/features'
import { IndustriesSection } from '@features/industries'

import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      <EditionsSection />
      <FeaturesSection />
      <AddonSections />
      <IndustriesSection />
      <ContactUsSection />
    </>
  )
}

export { Ui }
