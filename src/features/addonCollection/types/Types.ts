import { IconType } from 'react-icons'

import { Addon } from '@shared/constants/addonsMap'

export type ProductsType =
  | Addon.EventManagementSystem
  | Addon.CustomerLoyaltyManagement
  | Addon.Kds
  | Addon.OnlineTableReservations
  | Addon.QueueManagement
  | Addon.WaiterApp

interface DeploymentOption {
  title: string
  description: string
}

interface IndustriesServed {
  title: string
  description: string
}

interface Product {
  name: string
  info: string
  image: string
  features: string[]
  deploymentOption: DeploymentOption
  industriesServed: IndustriesServed
  brochureLink?: string
}

export type ProductsCollectionType = {
  [key in ProductsType]: Product
}
export interface FeatureCardProps {
  Icon: IconType
  title: string
}
export interface AllowType {
  $disallowBorder: boolean
}
