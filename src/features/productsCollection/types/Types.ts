import { Products } from '@shared/constants/productsMap'

export type ProductsType =
  | Products.Ritebooks
  | Products.Ritebooks_express
  | Products.Justpay
  | Products.Ritebooks_pocket
  | Products.Riteeats
  | Products.Riteroutes
  | Products.Tally_prime
  | Products.Rite_payroll

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
