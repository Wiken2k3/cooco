import { useState, useEffect } from 'react'
import './RecipeURLModal.css'

export default function RecipeURLModal({ onClose }) {
  const [url, setUrl] = useState('')

  // disable scroll body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'auto')
  }, [])

  const handleAdd = () => {
    console.log('URL:', url)
    onClose()
  }

  return (
    <div className="recipe-overlay">

      <div className="recipe-modal">
        <h2>Recipe Feed URL</h2>
        <p>Enter the recipe feed URL</p>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoFocus
        />

        <div className="recipe-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>

    </div>
  )
}