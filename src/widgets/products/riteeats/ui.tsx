import { ProductsCollection } from '@features/productsCollection'
import { Products } from '@shared/constants/productsMap'

const Ui = () => {
  return <ProductsCollection page={Products.Riteeats} />
}

export { Ui }
