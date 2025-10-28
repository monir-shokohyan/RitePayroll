import { ProductsCollection } from '@features/productsCollection'
import { Products } from '@shared/constants/productsMap'

const Ui = () => {
  return (
   <ProductsCollection page={Products.Ritebooks} />
  )
}

export { Ui }
