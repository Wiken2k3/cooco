import { useParams } from "react-router-dom"
import { mockRecipes } from "../../data/mockRecipes"
import "./RecipeDetail.css"

export default function RecipeDetail() {
  const { id } = useParams()
  const recipe = mockRecipes.find(r => r.id === id)

  if (!recipe) return <div>Recipe not found</div>

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} />

      <div className="detail-content">
        <h1>{recipe.name}</h1>
        <p>{recipe.time} min • {recipe.calories} kcal</p>

        <button className="primary-btn">
          Start Cooking
        </button>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map(i => (
            <li key={i.id}>
              {i.quantity} {i.unit} {i.name}
            </li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ol>
          {recipe.steps.map(s => (
            <li key={s.id}>{s.text}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
