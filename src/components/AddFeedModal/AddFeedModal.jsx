import './AddFeedModal.css'

export default function AddFeedModal({ onClose }) {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Recipe Feed URL</h2>
        <p>Enter the recipe feed URL</p>

        <input
          className="feed-input"
          placeholder=""
        />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button>Add</button>
        </div>

      </div>

    </div>
  )
}