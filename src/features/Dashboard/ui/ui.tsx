import { AboutUsSection } from '@features/aboutUs'
import { ActionSection } from '@features/actionSection'
import { AdvantageSection } from '@features/advantage'
import { ContactUsSection } from '@features/contactUs'
import { FeaturesSection } from '@features/featureSection'
import { GrowthSection } from '@features/growth'
import { IndustriesSection } from '@features/industriesSection'

import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      <AboutUsSection />
      <AdvantageSection />
      <ActionSection />
      <FeaturesSection />
      <GrowthSection />
      <IndustriesSection />
      <ContactUsSection />
    </>
  )
}

export { Ui }
