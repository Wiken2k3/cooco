export default function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} />

      {recipe.matchPercent > 0 && (
        <div className="match-badge">
          {recipe.matchPercent}% match
        </div>
      )}

      {recipe.trending && (
        <div className="trending-badge">
          Trending
        </div>
      )}

      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.time} min • {recipe.calories} kcal</p>
      </div>
    </div>
  )
}
