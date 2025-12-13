import { AddonCollection } from '@features/addonCollection'
import { Addon } from '@shared/constants/addonsMap'

const Ui = () => {
  return <AddonCollection page={Addon.WaiterApp} />
}

export { Ui }
