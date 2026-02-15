export const mockRecipes = [
  {
    id: "r1",
    name: "Granola Bars",
    image: "/images/granola.jpg",
    time: 30,
    calories: 420,
    difficulty: "Easy",
    diet: ["Vegan"],
    category: "Breakfast",
    ingredients: [
      { id: "i1", name: "Oats", quantity: 200, unit: "g" },
      { id: "i2", name: "Honey", quantity: 2, unit: "tbsp" },
      { id: "i3", name: "Peanut Butter", quantity: 100, unit: "g" }
    ],
    steps: [
      { id: "s1", text: "Mix dry ingredients", timer: 0 },
      { id: "s2", text: "Add honey and peanut butter", timer: 0 },
      { id: "s3", text: "Bake for 20 minutes", timer: 1200 }
    ],
    trending: true
  }
]
