import recipes from '../../data/recipes'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import './Recipes.css'

export default function Recipes() {
  return (
    <div className="recipes-page">
      <h1 className="recipes-title">Recipes</h1>

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
