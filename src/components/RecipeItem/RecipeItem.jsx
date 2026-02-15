import React from 'react'
import { MoreHorizontal } from 'lucide-react'
import './RecipeItem.css'

export default function RecipeItem({ recipe }) {
  return (
    <div className="recipe-item">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />

      <div className="recipe-info">
        <span className="recipe-name">{recipe.name}</span>
        <span className="recipe-meta">{recipe.meta}</span>
      </div>

      <button className="recipe-more-btn">
        <MoreHorizontal />
      </button>
    </div>
  )
}
