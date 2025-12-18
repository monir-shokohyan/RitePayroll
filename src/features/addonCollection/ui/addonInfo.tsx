import { TbPointerFilled } from 'react-icons/tb'
import { Flex } from '@mantine/core'

import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive } from '@shared/ui/Typography'

import { List, ListItem } from '../styles/styles'
import { ProductsType } from '../types'

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
        <Flex
          justify="center"
          gap={{ base: 20, sm: 30, md: 40, lg: 60 }}
          wrap="wrap"
        >
          <List>
            {product?.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <ListItem
                  key={feature.name}
                  $index={index}
                >
                  <div className="icon">
                    {Icon ? <Icon /> : <TbPointerFilled />}
                  </div>
                  <TextResponsive
                    width="70%"
                    $textalign="center"
                    fontSize="12px"
                    fontWeight="600"
                  >
                    {feature.name}
                  </TextResponsive>
                </ListItem>
              )
            })}
          </List>
        </Flex>
      </Wrapper>
    </div>
  )
}

export { AddonsInfo }
