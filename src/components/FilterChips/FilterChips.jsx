import { useState } from 'react'
import './FilterChips.css'

const filters = ['Quick', 'Healthy', 'Popular', 'Vegetarian', 'Dessert']

export default function FilterChips() {
  const [active, setActive] = useState(null)

  return (
    <div className="filter-chips">
      {filters.map(f => (
        <button
          key={f}
          className={`chip ${active === f ? 'active' : ''}`}
          onClick={() => setActive(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
