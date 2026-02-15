import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const content = document.querySelector('.app-content')
    if (content) {
      content.scrollTo({
        top: 0,
        behavior: 'instant' // không animation
      })
    }
  }, [pathname])

  return null
}
