import React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
// import './RecipeRow.css'

export default function RecipeRow({ recipe }) {
  const navigate = useNavigate()

  return (
    <div
      className="recipe-row"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
    >
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-row-info">
        <span className="recipe-row-name">{recipe.name}</span>
        <span className="recipe-row-meta">
          {recipe.time} min
          {recipe.leftovers && ` · Leftovers`}
        </span>
      </div>
      <MoreHorizontal />
    </div>
  )
}
