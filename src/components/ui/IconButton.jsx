import React from 'react'
import './IconButton.css'

export default function IconButton({
  icon: Icon,
  onClick,
  size = 22,
  variant = 'default',
  ariaLabel
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`icon-button ${variant}`}
    >
      {Icon && <Icon size={size} strokeWidth={2.5} />}
    </button>
  )
}
