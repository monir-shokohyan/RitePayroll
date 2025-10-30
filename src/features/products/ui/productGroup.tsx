import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { ImCheckmark } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { sectionType } from '@shared/constants/allTexts'
import IconWithText from '@shared/ui/IconWithText'
import { TextWithFamily } from '@shared/ui/Typography'

import { Card } from '../styles/styles'

const ProductGroup = ({ products }: { products: sectionType[] }) => {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  return (
    <Flex
      wrap="wrap"
      w="100%"
      justify="center"
      gap={20}
    >
      {products.map((product) => {
        return (
          <Card
            key={product.name}
            onMouseEnter={() => setId(product.name)}
            onMouseLeave={() => setId('')}
            bgcolor={id === product!.name ? (product!.color ?? '#fff') : '#fff'}
            bordercolor={product.color ?? '#ffff'}
            onClick={() => navigate(product!.to as string)}
          >
            <Image
              height={74}
              src={product.imgUrl}
              width={263}
              fit="contain"
              alt={product.alt}
            />
            <TextWithFamily
              color={SavedColors.TextColor}
              $textalign="center"
              fontWeight="600"
              $font="Nunito"
              fontSize="14px"
            >
              {product.description}
            </TextWithFamily>

            <Flex
              direction="column"
              gap={10}
            >
              {product?.features?.map((feature) => {
                return (
                  <IconWithText
                    key={feature}
                    text={feature}
                    icon={ImCheckmark}
                    fontSize="14px"
                    $hoveractive="false"
                    padding="0px"
                    textColor={SavedColors.TextColor}
                    iconColor={SavedColors.Primaryblue}
                  />
                )
              })}
              <Button
                variant="transparent"
                mt={40}
                rightSection={
                  <FaArrowRight
                    color={SavedColors.Primaryblue}
                    style={{ transition: 'all 0.5s ease-in-out' }}
                  />
                }
              >
                <TextWithFamily color={SavedColors.Primaryblue}>
                  Read More
                </TextWithFamily>
              </Button>
            </Flex>
          </Card>
        )
      })}
    </Flex>
  )
}

export default ProductGroup
