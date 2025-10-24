import { RouteType } from '@shared/types/router/route-type'

import { mainRoute } from './folder'
import { productsRoute } from './products'

export const routes: RouteType[] = [
  ...mainRoute,
  ...productsRoute,
]
