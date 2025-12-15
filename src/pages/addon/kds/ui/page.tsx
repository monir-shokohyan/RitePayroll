import { Helmet } from 'react-helmet'

import { KdsWidget } from '@widgets/addon/kds'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Kitchen Display System (KDS)</title>
        <meta
          name="description"
          content="Replace paper KOTs with real-time digital screens in the kitchen and bar. Eliminate lost tickets, speed up preparation, and improve accuracy with color-coded alerts and order tracking. Ideal for high-volume restaurants, QSRs, and cloud kitchens."
        />
        <meta
          name="keywords"
          content="kitchen display system, KDS restaurant, digital kitchen display, restaurant KDS software, order tracking kitchen, color-coded alerts KDS, multiple kitchen screens, POS kitchen display, restaurant operations Uganda, cloud kitchen KDS"
        />
      </Helmet>
      <Content title="Kitchen Display System (KDS)">
        <KdsWidget />
      </Content>
    </>
  )
}
