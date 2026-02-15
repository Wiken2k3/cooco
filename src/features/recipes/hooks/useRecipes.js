import { useMemo, useState } from "react"
import { mockRecipes } from "../data/mockRecipes"

export function useRecipes(fridgeItems = []) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const recipes = useMemo(() => {
    return mockRecipes
      .filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter(r =>
        category === "All" ? true : r.category === category
      )
      .map(r => ({
        ...r,
        matchPercent: calculateMatch(r, fridgeItems)
      }))
      .sort((a, b) => b.matchPercent - a.matchPercent)
  }, [search, category, fridgeItems])

  return {
    recipes,
    search,
    setSearch,
    category,
    setCategory
  }
}

function calculateMatch(recipe, fridge) {
  if (!fridge.length) return 0

  const matched = recipe.ingredients.filter(i =>
    fridge.some(f => f.name === i.name)
  )

  return Math.round((matched.length / recipe.ingredients.length) * 100)
}
