import { useState } from 'react'
import './SaveModal.css'

export default function SaveModal({ feed, onClose }) {
  const [selectedFolder, setSelectedFolder] = useState('Baking')

  const folders = [
    { id: 'baking', name: 'Baking' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'supper', name: 'Supper' },
  ]

  const handleSave = () => {
    console.log(`Saving "${feed.title}" to folder: ${selectedFolder}`)
    onClose()
  }

  return (
    <div className="save-overlay" onClick={onClose}>
      <div className="save-modal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="save-header">
          <button className="modal-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-btn save" onClick={handleSave}>
            Save
          </button>
        </div>

        {/* RECIPE PREVIEW */}
        <div className="save-recipe-preview">
          <img src={feed.image} alt={feed.title} />
          <div className="save-text">
            <h4>Saving recipe</h4>
            <p>{feed.title}</p>
          </div>
        </div>

        <h3 className="modal-title">Folders</h3>

        {/* FOLDER LIST */}
        <div className="folder-scroll-wrapper">
          {folders.map((folder) => {
            const isActive = selectedFolder === folder.name

            return (
              <div
                key={folder.id}
                className={`folder-item ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedFolder(folder.name)}
              >
                <div className="folder-visual">
                  <div className="folder-tab"></div>
                  <div className="folder-body">
                    {isActive && (
                      <img
                        src={feed.image}
                        alt="recipe preview"
                        className="folder-recipe-preview"
                      />
                    )}
                  </div>
                </div>

                <div className="folder-info">
                  <span className="folder-name">{folder.name}</span>
                  <span className="folder-count">
                    {isActive ? 'Selected' : ''}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}