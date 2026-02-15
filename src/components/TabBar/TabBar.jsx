import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  CalendarDays,
  FileText,
  ShoppingBasket,
  WandSparkles,
  MoreHorizontal
} from 'lucide-react'

import './TabBar.css'

const tabs = [
  { id: 'meal-plan', path: '/', name: 'Meal Plan', icon: CalendarDays },
  { id: 'recipes', path: '/recipes', name: 'Recipes', icon: FileText },
  { id: 'groceries', path: '/groceries', name: 'Groceries', icon: ShoppingBasket },
  { id: 'discover', path: '/discover', name: 'Discover', icon: WandSparkles },
  { id: 'settings', path: '/settings', name: 'Settings', icon: MoreHorizontal },
]

export default function TabBar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="tab-bar">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = location.pathname === tab.path

        return (
          <button
            key={tab.id}
            className={`tab-bar-btn ${isActive ? 'active' : ''}`}
            onClick={() => navigate(tab.path)}
          >
            <Icon className="tab-bar-icon" />
            <span className="tab-bar-label">{tab.name}</span>
          </button>
        )
      })}
    </div>
  )
}
