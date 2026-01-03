import { memo } from 'react'
import { IconType } from 'react-icons'
import { useNavigate } from 'react-router-dom'
import { Flex } from '@mantine/core'

import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'

import { StyledCard } from '../styles'
import { RibbonCard } from './ribbonCard'

const Ui = memo(() => {
  const pageInfo = FindByName('addon')
  const navigate = useNavigate()
  return (
    <div id="dashboard-addon-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={null}
        RSJustify="center"
        leftWidth="50%"
        rightWidth="50%"
        desTitle={pageInfo?.dTitle}
        title={pageInfo?.title}
        doubleOption={false}
      >
        <Flex
          wrap="wrap"
          w="100%"
          justify="center"
          gap={32}
          px={10}
        >
          {pageInfo?.features?.map((feature) => (
            <StyledCard
              key={feature.name}
              shadow="none"
              bg="transparent"
              onClick={() => {
                if (feature.target) {
                  navigate(feature.target)
                }
              }}
            >
              <RibbonCard
                title={feature.name}
                description={feature.description ?? ''}
                number={feature.id ?? 1}
                Icon={feature.icon as IconType}
              />
            </StyledCard>
          ))}
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
