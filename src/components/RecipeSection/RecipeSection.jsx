import React from 'react'
import RecipeItem from '../RecipeItem/RecipeItem'
import './RecipeSection.css'

export default function RecipeSection({ title, recipes }) {
  return (
    <div className="recipe-section">
      <h2 className="recipe-section-title">{title}</h2>

      <div className="recipe-section-list">
        {recipes.map(recipe => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
