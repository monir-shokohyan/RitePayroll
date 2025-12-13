import { RouteType } from '@shared/types/router/route-type'

import { addonRoute } from './addons'
import { mainRoute } from './folder'

export const routes: RouteType[] = [...mainRoute, ...addonRoute]
