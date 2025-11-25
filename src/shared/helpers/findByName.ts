import { TotalData } from '@shared/constants/allTexts'

const FindByName = (name: string) => {
  return TotalData.find(
    (obj) =>
      String(obj.name).toLocaleLowerCase() === String(name).toLowerCase(),
  )
}

export { FindByName }
