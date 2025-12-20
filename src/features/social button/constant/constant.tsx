import { FaGithub, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { ImportantInfo } from '@shared/constants/companyInfo'

interface MenuItemsType {
  icon: React.ReactNode
  href: ImportantInfo | string
  label: string
  delay: number
  x: number
  y: number
}
export const menuItems: MenuItemsType[] = [
  {
    icon: <FaGithub size={22} />,
    href: ImportantInfo.githubUrl,
    label: 'GitHub',
    delay: 0,
    x: 0,
    y: -105,
  },
  {
    icon: <FaPhone size={22} />,
    href: 'tel:+256755818183',
    label: 'Phone',
    delay: 0.1,
    x: 73,
    y: -73,
  },
  {
    icon: <MdEmail size={22} />,
    href: `mailto:${ImportantInfo.emailAddress}`,
    label: 'Email',
    delay: 0.2,
    x: 100,
    y: 0,
  },
]
