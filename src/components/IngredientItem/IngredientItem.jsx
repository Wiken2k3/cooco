import { Info, ChevronRight } from 'lucide-react'
import './IngredientItem.css'

export default function IngredientItem({ ingredient }) {
  return (
    <div className="ingredient-item">
      <div className="ingredient-icon">
        <Info />
      </div>

      <div className="ingredient-info">
        <span className="ingredient-name">{ingredient.name}</span>
        <span className="ingredient-extra">{ingredient.info}</span>
      </div>

      <div className="ingredient-chevron">
        <ChevronRight />
      </div>
    </div>
  )
}
