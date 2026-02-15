export default function SettingsToggleRow({
  icon,
  label,
  description,
  checked,
  onChange
}) {
  return (
    <button className="settings-row" onClick={onChange}>
      <div className="row-left">
        {icon && <span className="row-icon">{icon}</span>}

        <div>
          <div className="row-label">{label}</div>
          {description && (
            <div className="row-description">{description}</div>
          )}
        </div>
      </div>

      <div className={`switch ${checked ? 'on' : ''}`} />
    </button>
  )
}
