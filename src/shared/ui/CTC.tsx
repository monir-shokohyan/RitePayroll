import { SavedColors } from '@shared/constants'

const CTC = ({ text }: { text: string }) => {
  return <span style={{ color: SavedColors.Primaryblue }}>{text}</span>
}

export { CTC }
