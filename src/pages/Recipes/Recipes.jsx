import recipes from '../../data/recipes'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import './Recipes.css'

export default function Recipes() {
  return (
    <div className="recipes-page">
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  )
}
