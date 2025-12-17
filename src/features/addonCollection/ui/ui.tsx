import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

import { ProductsType } from '../types'
import { AddonsInfo } from './addonInfo'
import { AddonWelcome } from './addonWelcome'
import { BestFor } from './bestFor'

function Ui({ page }: { page: ProductsType }) {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

  return (
    <>
      <AddonWelcome page={page} />
      <AddonsInfo page={page} />
      <BestFor page={page} />
    </>
  )
}

export { Ui }
