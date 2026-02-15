import React, { useState } from 'react'
import { Folder, ChevronDown } from 'lucide-react'
import RecipeRow from '../RecipeRow/RecipeRow'
import './RecipeFolder.css'

export default function RecipeFolder({ folder }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="recipe-folder">
      <button className="recipe-folder-header" onClick={() => setOpen(!open)}>
        <Folder />
        <span className="recipe-folder-title">{folder.name}</span>
        <ChevronDown className={`chevron ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div className="recipe-folder-list">
          {folder.recipes.map(recipe => (
            <RecipeRow key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}
