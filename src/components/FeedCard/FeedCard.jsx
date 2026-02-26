import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import RecipeURLModal from '../RecipeURLModal/RecipeURLModal'
import './FeedCard.css'

export default function FeedCard({ feed }) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <>
      <div className="feed-card">

        {/* HEADER */}
        <div className="feed-header">
          <div className="feed-avatar" />
          <span className="feed-source">{feed.source}</span>
          <span className="feed-time">{feed.time}</span>
        </div>

        {/* IMAGE */}
        <div className="feed-image-wrapper">
          <img src={feed.image} alt={feed.title || ''} />

          {/* Overlay title */}
          {feed.title && (
            <div className="feed-overlay">
              <h3>{feed.title}</h3>
            </div>
          )}

          {/* Download button */}
          <button
            className="download-btn"
            onClick={openModal}
          >
            <ArrowDown size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <RecipeURLModal onClose={closeModal} />
      )}
    </>
  )
}