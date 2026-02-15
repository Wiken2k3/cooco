export default function SettingsDangerRow({
  icon,
  label,
  onClick
}) {
  return (
    <button className="settings-row danger" onClick={onClick}>
      <div className="row-left">
        {icon && <span className="row-icon">{icon}</span>}
        <span className="row-label">{label}</span>
      </div>
    </button>
  )
}
