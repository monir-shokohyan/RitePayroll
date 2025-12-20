import { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

import { menuItems } from '../constant'
import { BackgroundCircle, Container, FabButton, MenuItem } from '../styles'

const Ui = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <Container>
      <AnimatePresence>
        {isOpen && (
          <BackgroundCircle
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {menuItems.map((item) => (
        <AnimatePresence key={item.href}>
          {isOpen && (
            <MenuItem
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              aria-label={item.label}
              $delay={item.delay}
              $translateX={item.x}
              $translateY={item.y}
              $isOpen={isOpen}
              initial={{ top: 0, right: 0 }}
              animate={{ top: item.y, right: item.x }}
              transition={{
                duration: 0.4,
                delay: item.delay,
                type: 'spring',
                stiffness: 200,
              }}
            >
              {item.icon}
            </MenuItem>
          )}
        </AnimatePresence>
      ))}

      <FabButton
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {isOpen ? <FaTimes size={26} /> : <FaPlus size={26} />}
        </motion.div>
      </FabButton>
    </Container>
  )
}

export { Ui }
