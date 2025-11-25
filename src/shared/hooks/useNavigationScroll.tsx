/* eslint-disable unicorn/prefer-query-selector */
import { useNavigate } from 'react-router-dom'

const useNavigationScroll = () => {
  const navigate = useNavigate()
  const navigateAndScroll = (path: string, sectionId: string) => {
    navigate(path)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        setTimeout(() => {
          const retryElement = document.getElementById(sectionId)
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 500)
      }
    }, 300)
  }
  return {
    navigateAndScroll,
  }
}

export { useNavigationScroll }
