import { Outlet } from 'react-router-dom'
import AppBar from '../components/AppBar/AppBar'
import TabBar from '../components/TabBar/TabBar'

export default function AppLayout({ isDarkMode, onToggleDark }) {
  return (
    <div className={`app-layout ${isDarkMode ? 'dark' : ''}`}>
      
      {/* Header */}
      <AppBar
        isDarkMode={isDarkMode}
        onToggleDark={onToggleDark}
      />

      {/* Page Content */}
      <main className="app-content">
        <Outlet context={{ isDarkMode, onToggleDark }} />
      </main>

      {/* Bottom Navigation */}
      <TabBar />

    </div>
  )
}