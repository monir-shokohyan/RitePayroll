import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ProductsType } from '../types'
import { AddonsInfo } from './addonInfo'
import { AddonWelcome } from './addonWelcome'
import { BestFor } from './bestFor'

function Ui({ page }: { page: ProductsType }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return (
    <>
      <AddonWelcome page={page} />
      <AddonsInfo page={page} />
      <BestFor page={page} />
    </>
  )
}

export { Ui }
