import { Helmet } from 'react-helmet'

import { WMPCWidget } from '@widgets/features/Wmpc'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.WMPC}</title>
        <meta
          name="description"
          content="Run payroll on weekly or monthly cycles with complete flexibility. Automatically integrate attendance data for accurate, timely salary processing tailored to your business."
        />
        <meta
          name="keywords"
          content="weekly payroll software Kenya, monthly payroll system, flexible payroll cycles, payroll processing software, attendance linked payroll, bi-weekly payroll Kenya"
        />
      </Helmet>
      <Content title={Features.WMPC}>
        <WMPCWidget />
      </Content>
    </>
  )
}
