import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import RecipeURLModal from '../RecipeURLModal/RecipeURLModal'
import './FeedCard.css'

export default function FeedCard({ feed, onOpen }) {
  const [showModal, setShowModal] = useState(false)

  if (!feed) return null

  const openModal = (e) => {
    e.stopPropagation()
    setShowModal(true)
  }

  return (
    <>
      <div
        className="feed-card"
        onClick={() => onOpen?.(feed)}
      >
        {/* HEADER */}
        <div className="feed-header">
          <div className="feed-avatar">
            {feed.avatar ? (
              <img src={feed.avatar} alt={feed.source} />
            ) : (
              <img
                src={`https://ui-avatars.com/api/?name=${feed.source}`}
                alt={feed.source}
              />
            )}
          </div>

          <div className="feed-meta">
            <span className="feed-source">{feed.source}</span>
            <span className="feed-time">{feed.time}</span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="feed-image-wrapper">
          <img src={feed.image} alt={feed.title} />

          {/* TITLE TOP LEFT */}
          {feed.title && (
            <div className="feed-overlay">
              <h3>{feed.title}</h3>
            </div>
          )}

          {/* DOWNLOAD BUTTON */}
          <button
            className="download-btn"
            onClick={openModal}
          >
            <ArrowDown size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {showModal && (
        <RecipeURLModal onClose={() => setShowModal(false)} />
      )}
    </>
  )
}