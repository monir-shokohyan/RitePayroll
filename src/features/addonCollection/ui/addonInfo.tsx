import { FaBatteryEmpty } from 'react-icons/fa'
import { Flex } from '@mantine/core'

import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'

import { HoneycombGrid } from '../styles/styles'
import { ProductsType } from '../types'
import { FeatureCard } from './featureCard'

const AddonsInfo = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)

  return (
    <div id="addon-info-section">
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
    </div>
  )
}

export { AddonsInfo }
