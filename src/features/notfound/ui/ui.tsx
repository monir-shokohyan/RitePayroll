import { MdSearch } from 'react-icons/md'

import { SavedColors } from '@shared/constants'

import {
  BackgroundCircle,
  ButtonGroup,
  Container,
  ContentWrapper,
  Description,
  Number,
  NumberWrapper,
  SearchIcon,
  StyledButton,
  Title,
} from '../styles'
import { NotFoundPageProps } from '../types'

const Ui: React.FC<NotFoundPageProps> = ({ onGoHome, onGoBack }) => {
  const handleGoHome = (): void => {
    if (onGoHome) {
      onGoHome()
    } else {
      window.location.href = '/'
    }
  }

  const handleGoBack = (): void => {
    if (onGoBack) {
      onGoBack()
    } else {
      window.history.back()
    }
  }

  return (
    <Container>
      <BackgroundCircle
        top="10%"
        left="10%"
        size="200px"
        delay="0s"
      />
      <BackgroundCircle
        top="70%"
        left="80%"
        size="300px"
        delay="1s"
      />
      <BackgroundCircle
        top="40%"
        left="70%"
        size="150px"
        delay="2s"
      />

      <ContentWrapper>
        <NumberWrapper>
          <Number delay="0s">4</Number>
          <SearchIcon>
            <MdSearch />
          </SearchIcon>
          <Number delay="0.2s">4</Number>
        </NumberWrapper>

        <Title>Page Not Found</Title>

        <Description>
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted. Let's get you back on track!
        </Description>

        <ButtonGroup>
          <StyledButton
            onClick={handleGoHome}
            style={{
              background: SavedColors.highlite,
              color: '#ffffff',
            }}
          >
            Go Home
          </StyledButton>

          <StyledButton
            onClick={handleGoBack}
            variant="outline"
            style={{
              borderColor: SavedColors.highlite,
              color: SavedColors.highlite,
              borderWidth: '2px',
            }}
          >
            Go Back
          </StyledButton>
        </ButtonGroup>
      </ContentWrapper>
    </Container>
  )
}

export { Ui }
