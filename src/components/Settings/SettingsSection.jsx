export default function SettingsSection({ title, children }) {
  return (
    <div className="settings-section">
      {title && (
        <h3 className="settings-section-title">
          {title}
        </h3>
      )}
      <div className="settings-card">
        {children}
      </div>
    </div>
  )
}
