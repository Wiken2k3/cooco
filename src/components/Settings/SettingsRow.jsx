import { ChevronRight } from 'lucide-react'

export default function SettingsRow({ icon, label, value, onClick }) {
  return (
    <button className="settings-row" onClick={onClick}>
      <div className="row-left">
        {icon && <span className="row-icon">{icon}</span>}
        <span className="row-label">{label}</span>
      </div>

      {value ? (
        <span className="row-value">{value}</span>
      ) : (
        <ChevronRight size={16} className="row-chevron" />
      )}
    </button>
  )
}
