import { FaArrowUp } from 'react-icons/fa'
import { ActionIcon, Affix, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'

const AffixComponent = () => {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <Affix position={{ bottom: 30, left: 30 }}>
      <Transition
        transition="slide-up"
        mounted={scroll.y > 0}
      >
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            size="xl"
            color={SavedColors.Primaryblue}
          >
            <FaArrowUp size={16} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  )
}

export { AffixComponent }
