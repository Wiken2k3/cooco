import { useState } from 'react'
import './SuggestedFeedsModal.css'

export default function SuggestedFeedsModal({ onClose, onAdd }) {
  const initialFeeds = [
    { source: 'Bon Appetit' },
    { source: 'Serious Eats' },
    { source: 'NYT Cooking' },
    { source: 'Food52' }
  ]

  const [added, setAdded] = useState([])

  const handleAdd = (feed) => {
    if (!added.includes(feed.source)) {
      setAdded(prev => [...prev, feed.source])

      onAdd({
        source: feed.source,
        time: '5 hours ago',
        title: 'Ricotta Pancakes With Blueberry Compote',
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543'
      })
    }
  }

  return (
    <div className="modal-overlay">

      <div className="suggested-modal">

        <div className="suggested-header">
          <h2>Suggested Feeds</h2>
          <button onClick={onClose}>Done</button>
        </div>

        <div className="suggested-list">
          {initialFeeds.map((feed, i) => (
            <div className="suggested-item" key={i}>
              <div className="avatar" />
              <span>{feed.source}</span>

              <button
                className={`added-btn ${added.includes(feed.source) ? 'active' : ''}`}
                onClick={() => handleAdd(feed)}
              >
                {added.includes(feed.source) ? 'Added' : 'Add'}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}