import { ActionIconProps, PaperProps } from "@mantine/core";


export interface StyledActionIconProps extends ActionIconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


export type ChatType = PaperProps & { isMinimized: boolean} & {children: React.ReactNode};
export type CompanyInfo = {
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
};

export type Product = {
  name: string;
  description: string;
  features: string[];
  industries: string;
  deployment: string;
};

export type Products = Record<string, Product>;

export type Message = {
  type: "user" | "bot";
  text: string;
  showWhatsApp?: boolean;  // ← This allows button
};