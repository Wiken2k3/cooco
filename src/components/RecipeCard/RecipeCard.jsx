import { useNavigate } from 'react-router-dom'
import './RecipeCard.css'

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate()

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
    >
      <div className="recipe-card-image-wrapper">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card-image"
        />

        <div className="recipe-card-match">
          {recipe.match}% match
        </div>
      </div>

      <div className="recipe-card-content">
        <span className="recipe-card-tag">
          {recipe.tag}
        </span>

        <h3 className="recipe-card-title">
          {recipe.title}
        </h3>

        <div className="recipe-card-meta">
          {recipe.time} min • {recipe.kcal} kcal
        </div>
      </div>
    </div>
  )
}
