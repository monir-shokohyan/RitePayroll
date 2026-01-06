import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

import { ProductsType } from '../types'
import { FeatureInfo } from './featureInfo'
import { FeatureWelcome } from './featureWelcome'

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
      <FeatureWelcome page={page} />
      <FeatureInfo page={page} />
    </>
  )
}

export { Ui }
