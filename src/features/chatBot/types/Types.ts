import { ActionIconProps, PaperProps } from "@mantine/core";

export interface Message {
  type: 'user' | 'bot';
  text: string;
}
export interface StyledActionIconProps extends ActionIconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface CompanyInfo {
  name: string;
  experience: string;
  clients: string;
  founder: string;
  coDirector: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  hours: string;
}

export interface Product {
  name: string;
  description: string;
  features: string[];
  industries: string;
  deployment: string;
}

export interface Products {
  [key: string]: Product;
}
export type ChatType = PaperProps & { isMinimized: boolean} & {children: React.ReactNode};
