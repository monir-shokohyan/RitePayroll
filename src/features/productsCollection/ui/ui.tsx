import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ProductsType } from '../types'
import { ProductsEditions } from './productsEditions'
import { ProductsInfo } from './productsInfo'
import { ProductWelcome } from './productWelcome'

function Ui({ page }: { page: ProductsType }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return (
    <>
      <ProductWelcome page={page} />
      <ProductsInfo page={page} />
      {/* <ProductsEditions page={page} /> */}
    </>
  )
}

export { Ui }
