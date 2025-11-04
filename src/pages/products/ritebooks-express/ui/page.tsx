import { Helmet } from 'react-helmet'

import { RitebooksExpress } from '@widgets/products/ritebooks-express'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Ritebooks Express Software Uganda</title>
        <meta
          name="description"
          content="An affordable and simplified version of Ritebooks tailored for startups and small businesses."
        />
        <meta
          name="keywords"
          content="ritebooks express, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Ritebooks Express">
        <RitebooksExpress />
      </Content>
    </>
  )
}
