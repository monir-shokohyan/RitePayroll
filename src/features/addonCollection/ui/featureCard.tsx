import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { TextResponsiveSmaller } from '@shared/ui/Typography'

import { DiamondCard, DiamondCardWrapper } from '../styles/styles'
import { FeatureCardProps } from '../types'

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title }) => {
  const isTableMobile = useMediaQuery('(max-width: 760px)')

  return (
    <DiamondCardWrapper className="group">
      <DiamondCard>
        <Icon
          size={isTableMobile ? 22 : 32}
          color={SavedColors.TextColorGreen}
        />

        <TextResponsiveSmaller
          width="80%"
          $textalign="center"
        >
          {title}
        </TextResponsiveSmaller>
      </DiamondCard>
    </DiamondCardWrapper>
  )
}

export { FeatureCard }
