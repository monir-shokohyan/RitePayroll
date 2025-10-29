import { memo } from 'react'

import FindByName from '@shared/helpers/findByName'
import VerWrapper from '@shared/ui/VerWrapper'

import ServicesGroup from './srvicesGroup'

const Ui = memo(() => {
  const pageInfo = FindByName('Services')

  return (
    <section id="dashboard-services-section">
      <VerWrapper
        sectionTitle={pageInfo?.name}
        title={pageInfo?.title}
      >
        <ServicesGroup services={pageInfo!.features} />
      </VerWrapper>
    </section>
  )
})

export { Ui }
