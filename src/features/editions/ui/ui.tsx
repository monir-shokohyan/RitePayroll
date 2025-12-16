/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { Flex, Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { IconWithText } from '@shared/ui/IconWithText'
import { TextWithFamily } from '@shared/ui/Typography'

const Ui = memo(() => {
  const pageInfo = FindByName('editions')

  return (
    <div id="dashboard-editions-section">
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
          w="100%"
          wrap="wrap"
          justify="center"
        >
          {pageInfo?.editions?.map((edition) => {
            return (
              <div
                key={edition.name}
                style={{ width: '450px' }}
              >
                <Image
                  src={edition.imageSrc}
                  w="100%"
                  alt={edition.name}
                />
                <Flex
                  w="100%"
                  gap={20}
                  direction="column"
                  p={20}
                  bg={edition.infoSectionBg}
                >
                  <TextWithFamily
                    fontSize="24px"
                    $font="Nunito"
                    fontWeight="800"
                    color={SavedColors.PrimaryWhite}
                  >
                    {edition.name}
                  </TextWithFamily>

                  <TextWithFamily
                    fontSize="14px"
                    $font="Nunito"
                    fontWeight="400"
                    color={SavedColors.PrimaryWhite}
                  >
                    {edition.description}
                  </TextWithFamily>
                </Flex>
                <Flex
                  w="100%"
                  gap={0}
                  direction="column"
                  p={5}
                  bg={edition.featureSectionBg}
                  h={400}
                >
                  {edition.features.map((feature) => {
                    return (
                      <IconWithText
                        key={feature.name}
                        $isActiveIconBg={false}
                        $hoveractive="false"
                        icon={feature.icon}
                        iconSize={20}
                        iconColor={edition.infoSectionBg}
                        fontSize="14px"
                        padding="0px"
                        fontWeight="400"
                        textColor={SavedColors.TextColor}
                        text={feature.name}
                        allowTextRes={false}
                      />
                    )
                  })}
                  <div style={{ marginTop: '16px' }}>
                    <IconWithText
                      $isActiveIconBg={false}
                      $hoveractive="false"
                      icon={IoIosInformationCircleOutline}
                      iconSize={25}
                      iconColor={SavedColors.Primaryblue}
                      fontSize="14px"
                      padding="0px"
                      fontWeight="600"
                      textColor={SavedColors.TextColor}
                      text={edition.bestFor}
                      allowTextRes={false}
                    />
                  </div>
                </Flex>
              </div>
            )
          })}
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
