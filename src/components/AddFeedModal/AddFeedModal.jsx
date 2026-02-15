import './AddFeedModal.css'
import { useState } from 'react'

export default function AddFeedModal({ onClose }) {
  const [url, setUrl] = useState('')

  return (
    <div className="modal-overlay">
      <div className="ios-modal">
        <div className="ios-modal-content">
          <h2 className="ios-title">Recipe Feed URL</h2>
          <p className="ios-subtitle">
            Enter the recipe feed URL
          </p>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="ios-input"
          />
        </div>

        <div className="ios-actions">
          <button className="ios-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="ios-btn add">
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
