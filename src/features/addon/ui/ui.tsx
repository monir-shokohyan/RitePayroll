/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Card, CardProps, Flex, Image, UnstyledButton } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import { RibbonCard } from './ribbonCard'
import { IconType } from 'react-icons'

const StyledCard = styled(Card)<CardProps>`
  position: relative;
  border-radius: 20px;
  /* padding: 42px; */
  /* padding-top: 62px; */
  /* height: 260px; */
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%); */
  background: transparent;
  /* border: 1px solid #e5e7eb; */
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); */
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12); */
  }
`

const ArrowButton = styled(UnstyledButton)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 56px;
  height: 56px;
  border-top-left-radius: 20px;
  background: ${SavedColors.primaryBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const Ui = memo(() => {
  const pageInfo = FindByName('addon')

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
        gradientDirection="bottom-to-top"
        doubleOption={false}
      >
        <Flex
          wrap="wrap"
          w="100%"
          justify="center"
          gap={32}
          px={10}
        >
          {pageInfo?.features.map((feature) => (
            <StyledCard
              key={feature.name}
              shadow="none"
              bg="transparent"
            >
              {/* <Image
                src="/bg-arrow.svg"
                height={40}
                fit="contain"
                opacity={0.2}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '-100px',
                  pointerEvents: 'none',
                }}
              />

              <Flex
                direction="column"
                gap={10}
              >
                <Image
                  src="/bg-arrow.svg"
                  height={40}
                  fit="contain"
                  opacity={0.2}
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '100px',
                    pointerEvents: 'none',
                  }}
                />
                <TextWithFamily
                  fontSize="24px"
                  $font="Nunito"
                  fontWeight="800"
                  color="#1e293b"
                >
                  {feature.name}
                </TextWithFamily>

                <TextWithFamily
                  fontSize="16px"
                  $font="Nunito"
                  fontWeight="500"
                  color="#64748b"
                >
                  {feature.description}
                </TextWithFamily>
              </Flex>

              <ArrowButton>
                <FaArrowRight size={20} />
              </ArrowButton> */}
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
