import { useParams } from 'react-router-dom'
// import StepItem from '../../components/RecipeStep/RecipeStep'
import IngredientItem from '../../components/IngredientItem/IngredientItem'
import recipeData from '../../data/recipes'
import './RecipeDetail.css'

export default function RecipeDetail() {
  const { id } = useParams()

  const allRecipes = recipeData.flatMap(folder => folder.recipes)
  const recipe = allRecipes.find(r => String(r.id) === id)

  if (!recipe) {
    return (
      <div className="recipe-detail">
        <div className="recipe-detail-content">
          <p>Recipe not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-detail-content">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-hero"
        />

        <h1>{recipe.name}</h1>

        {recipe.leftovers && (
          <span className="leftover-badge">
            Leftovers · {recipe.leftovers}
          </span>
        )}

        {recipe.ingredients?.length > 0 && (
          <section>
            <h3>Ingredients</h3>
            {recipe.ingredients.map((ingredient, idx) => (
              <IngredientItem
                key={idx}
                ingredient={ingredient}
              />
            ))}
          </section>
        )}

        {recipe.steps?.length > 0 && (
          <section>
            <h3>Steps</h3>
            {recipe.steps.map(step => (
              <StepItem
                key={step.id}
                step={step}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
