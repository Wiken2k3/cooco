import { discoverFeeds } from '../../data/discoverFeeds'
import './SuggestedFeedsModal.css'

export default function SuggestedFeedsModal({ onClose, onAdd, existingFeeds }) {
  // Kiểm tra xem feed đã được chọn chưa để đổi nút "Add" thành "Added"
  const isAdded = (id) => existingFeeds.some(f => f.id === id)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="suggested-modal" onClick={e => e.stopPropagation()}>
        <div className="suggested-header">
          <h2>Suggested Feeds</h2>
          <button onClick={onClose}>Done</button>
        </div>

        <div className="suggested-list">
          {discoverFeeds.map((feed) => (
            <div className="suggested-item" key={feed.id}>
              <img src={feed.avatar} alt={feed.source} className="avatar" />
              <div className="feed-info">
                <span className="source-name">{feed.source}</span>
                <span className="feed-title">{feed.title}</span>
              </div>

              <button
                className={`added-btn ${isAdded(feed.id) ? 'active' : ''}`}
                onClick={() => !isAdded(feed.id) && onAdd(feed)}
                disabled={isAdded(feed.id)}
              >
                {isAdded(feed.id) ? 'Added' : 'Add'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}