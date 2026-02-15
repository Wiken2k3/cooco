import { useOutletContext } from 'react-router-dom'
import {
  User,
  Bell,
  Moon,
  CalendarDays,
  Trash2,
  Info
} from 'lucide-react'

import {
  SettingsSection,
  SettingsRow,
  SettingsToggleRow,
  SettingsDangerRow
} from '../../components/Settings'

import './Settings.css'

export default function Settings() {
  const { isDarkMode, onToggleDark } = useOutletContext() || {}

  return (
    <div className="settings-container">

      <SettingsSection title="Account">
        <SettingsRow
          icon={<User />}
          label="Profile"
        />
      </SettingsSection>

      <SettingsSection title="Preferences">
        <SettingsToggleRow
          icon={<Moon />}
          label="Dark Mode"
          description="Use dark appearance"
          checked={isDarkMode}
          onChange={onToggleDark}
        />

        <SettingsRow
          icon={<CalendarDays />}
          label="Week Starts On"
          value="Monday"
        />
      </SettingsSection>

      <SettingsSection title="Meal Planning">
        <SettingsRow label="Auto-generate weekly plan" />
        <SettingsRow label="Default servings" value="2 people" />
      </SettingsSection>

      <SettingsSection title="Notifications">
        <SettingsToggleRow
          icon={<Bell />}
          label="Meal reminders"
          description="Get notified before meals"
        />
      </SettingsSection>

      <SettingsSection title="About">
        <SettingsRow
          icon={<Info />}
          label="App Version"
          value="1.0.0"
        />
      </SettingsSection>

      <SettingsSection>
        <SettingsDangerRow
          icon={<Trash2 />}
          label="Clear all meal plans"
        />
      </SettingsSection>

    </div>
  )
}
