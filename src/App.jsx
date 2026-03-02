import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import AppLayout from './layouts/AppLayout'

import MealPlan from './pages/MealPlan/MealPlan'
import Recipes from './pages/Recipes/Recipes'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
import Groceries from './pages/Groceries/Groceries'
import Discover from './pages/Discover/Discover'
import DiscoverDetail from './pages/DiscoverDetail/DiscoverDetail'
import DiscoverSteps from './pages/DiscoverSteps/DiscoverSteps'
import Settings from './pages/Settings/Settings'

import './styles/variables.css'
import './styles/App.css'

export default function App() {

  // ✅ Giữ cách khởi tạo ban đầu (đúng & ổn định)
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  // ✅ Toggle đơn giản & predictable
  const toggleDark = () => {
    setIsDarkMode(prev => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          element={
            <AppLayout
              isDarkMode={isDarkMode}
              onToggleDark={toggleDark}
            />
          }
        >
          {/* MAIN */}
          <Route index element={<MealPlan />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="groceries" element={<Groceries />} />
          <Route path="settings" element={<Settings />} />

          {/* DISCOVER */}
          <Route path="discover" element={<Discover />} />
          <Route path="discover/detail/:id" element={<DiscoverDetail />} />
          <Route path="discover/steps/:id" element={<DiscoverSteps />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div style={{ padding: 40 }}>
                <h2>404 - Page Not Found</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  )
}