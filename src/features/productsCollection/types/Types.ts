export type ProductsType =
  | 'ritebooks'
  | 'justpay'
  | 'rite-payroll'
  | 'ritebooks-express'
  | 'ritebooks-pocket'
  | 'riteeats'
  | 'riteroutes'
  | 'tally-prime';

interface DeploymentOption {
  title: string;
  description: string;
}

interface IndustriesServed {
  title: string;
  description: string;
}

interface Product {
  name: string;
  info: string;
  image: string;
  features: string[];
  deploymentOption: DeploymentOption;
  industriesServed: IndustriesServed;
}

export type ProductsCollectionType = {
  [key in ProductsType]: Product;
};