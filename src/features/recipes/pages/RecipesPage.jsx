import { useNavigate } from "react-router-dom"
import { useRecipes } from "../hooks/useRecipes"
import RecipeCard from "../components/RecipeCard"
import "./RecipesPage.css"

export default function RecipesPage() {
  const navigate = useNavigate()

  // Tạm thời mock fridge
  const fridge = [
    { name: "Oats" },
    { name: "Peanut Butter" }
  ]

  const {
    recipes,
    search,
    setSearch,
    category,
    setCategory
  } = useRecipes(fridge)

  return (
    <div className="recipes-page">
      <div className="recipes-header">
        <input
          placeholder="Search recipes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="recipes-search"
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="recipes-filter"
        >
          <option>All</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>
      </div>

      <div className="recipes-grid">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => navigate(`/recipes/${recipe.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
