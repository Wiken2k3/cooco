import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './AppBar.css'
import {
  ArrowLeft,
  ArrowDown,
  MoreHorizontal,
  ShoppingCart,
  Trash2,
  CloudSun,
  WandSparkles,
  Plus
} from 'lucide-react'

export default function AppBar({ isDarkMode, onToggleDark }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  /* Close menu when click outside */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* Route config */
  const routeConfig = {
    '/': {
      title: 'Meal Plan',
      showMore: true
    },
    '/recipes': {
      title: 'Recipes'
    },
    '/groceries': {
      title: 'Groceries'
    },
    '/discover': {
      title: 'Discover',
      action: <Plus size={20} />
    },
    '/settings': {
      title: 'Settings'
    }
  }

  const isRecipeDetail = location.pathname.startsWith('/recipes/')
  const current = routeConfig[location.pathname] || {}

  const title = isRecipeDetail
    ? 'Recipe Detail'
    : current.title || 'App'

  return (
    <header className="app-bar">
      <div className="app-bar-container">

        {/* LEFT */}
        <div className="app-bar-left">
          {isRecipeDetail && (
            <button
              className="app-bar-icon-button"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={20} />
            </button>
          )}

          <h1 className="app-bar-title">{title}</h1>
        </div>

        {/* RIGHT */}
        <div className="app-bar-actions">

          {/* ArrowDown – cùng loại với day-section-btn */}
          <button className="app-bar-icon-button">
            <ArrowDown size={20} />
          </button>

          {/* Route specific action */}
          {current.action && (
            <button className="app-bar-icon-button">
              {current.action}
            </button>
          )}

          {/* More menu */}
          {current.showMore && (
            <div className="more-wrapper" ref={menuRef}>
              <button
                className="app-bar-icon-button"
                onClick={() => setIsMenuOpen(v => !v)}
              >
                <MoreHorizontal size={20} />
              </button>

              {isMenuOpen && (
                <div className="more-menu">
                  <MenuItem
                    label="Add to Groceries"
                    icon={<ShoppingCart size={18} />}
                  />
                  <MenuItem
                    label="Generate Plan for Week"
                    icon={<WandSparkles size={18} />}
                  />
                  <MenuItem
                    label="Clear Current Week"
                    icon={<Trash2 size={18} />}
                    destructive
                  />
                  <div className="menu-divider" />
                  <MenuItem
                    label="Show Weather"
                    icon={<CloudSun size={18} />}
                  />
                </div>
              )}
            </div>
          )}

          {/* Dark mode toggle */}
          <div
            className={`toggle-switch ${isDarkMode ? 'on' : ''}`}
            onClick={onToggleDark}
          >
            <div className="toggle-slider" />
          </div>

        </div>
      </div>
    </header>
  )
}

function MenuItem({ label, icon, destructive }) {
  return (
    <button className={`menu-item ${destructive ? 'destructive' : ''}`}>
      <span className="menu-label">{label}</span>
      <span className="menu-icon">{icon}</span>
    </button>
  )
}