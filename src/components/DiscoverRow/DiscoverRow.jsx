import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './DiscoverRow.css'

export default function DiscoverRow({ recipe }) {
  const navigate = useNavigate()

  if (!recipe) return null

  return (
    <div
      className="discover-row"
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/recipes/${recipe.id}`)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          navigate(`/recipes/${recipe.id}`)
        }
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="discover-row-image"
      />

      <span className="discover-row-title">
        {recipe.name}
      </span>

      <ChevronRight
        size={18}
        className="discover-row-icon"
      />
    </div>
  )
}
