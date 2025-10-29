import { memo } from 'react'

import FindByName from '@shared/helpers/findByName'
import VerWrapper from '@shared/ui/VerWrapper'

import ProductGroup from './productGroup'

const Ui = memo(() => {
  const pageInfo = FindByName('Products')

  return (
    <section id="dashboard-products-section">
      <VerWrapper
        sectionTitle={pageInfo?.name}
        title={pageInfo?.title}
      >
        <ProductGroup products={pageInfo!.features} />
      </VerWrapper>
    </section>
  )
})

export { Ui }
