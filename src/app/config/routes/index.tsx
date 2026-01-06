import { RouteType } from '@shared/types/router/route-type'

import { featuresRoute } from './features'
import { mainRoute } from './folder'

export const routes: RouteType[] = [...mainRoute, ...featuresRoute]
