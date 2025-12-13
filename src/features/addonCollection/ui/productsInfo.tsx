import { IconType } from 'react-icons'
import { FaBatteryEmpty } from 'react-icons/fa'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsiveSmaller } from '@shared/ui/Typography'

import { ProductsType } from '../types'

interface FeatureCardProps {
  Icon: IconType
  title: string
}

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

const HoneycombGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  position: relative;
  width: 100%;
`

const DiamondCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const DiamondCard = styled.div`
  background: white;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.3),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  position: relative;
  @media (max-width: 998px) {
    width: 200px;
    height: 200px;
    gap: 20px;
  }
  @media (max-width: 720px) {
    width: 150px;
    height: 150px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    gap: 5px;
  }
`

const ProductsInfo = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)

  return (
    <Wrapper
      bgImage="/texture.png"
      isReverseWrap={false}
      fullHeight={false}
      leftWidth="60%"
      rightWidth="40%"
      RSJustify="center"
      desTitle="Checkout"
      title="ADD-ON MODULES FEATURES"
      isSticky={true}
      doubleOption={false}
    >
      <HoneycombGrid>
        <Flex gap={{ base: 10, sm: 10, md: 20, lg: 20 }}>
          {product?.features.slice(0, 3).map((feature) => (
            <FeatureCard
              key={feature.name}
              title={feature.name}
              Icon={feature.icon ?? FaBatteryEmpty}
            />
          ))}
        </Flex>

        <Flex gap={{ base: 10, sm: 10, md: 20, lg: 20 }}>
          {product?.features.slice(3, 5).map((feature) => (
            <FeatureCard
              key={feature.name}
              title={feature.name}
              Icon={feature.icon ?? FaBatteryEmpty}
            />
          ))}
        </Flex>

        <Flex>
          {product?.features.slice(5, 6).map((feature) => (
            <FeatureCard
              key={feature.name}
              title={feature.name}
              Icon={feature.icon ?? FaBatteryEmpty}
            />
          ))}
        </Flex>
      </HoneycombGrid>
    </Wrapper>
  )
}

export { ProductsInfo }
