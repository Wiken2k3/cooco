import { useState } from 'react'
import { Plus, MoreHorizontal } from 'lucide-react'
import FeedCard from '../../components/FeedCard/FeedCard'
import SuggestedFeedsModal from '../../components/SuggestedFeedsModal/SuggestedFeedsModal'
import './Discover.css'

export default function Discover() {
  const [showSuggested, setShowSuggested] = useState(false)
  const [feeds, setFeeds] = useState([])

  const handleAddFeed = (feed) => {
    setFeeds(prev => [...prev, feed])
  }

  return (
    <div className="discover-container">

{/*      
      <div className="discover-header">
        <h1>Discover</h1>

        <div className="discover-actions">
          <button className="circle-btn">
            <Plus size={20} />
          </button>
          <button className="circle-btn">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div> */}

      {/* EMPTY STATE */}
      {feeds.length === 0 && (
        <div className="discover-empty">
          <div className="empty-icon">✦</div>
          <h3>Discover</h3>
          <p>Add feeds to discover new recipes</p>
          <button
            className="suggested-btn"
            onClick={() => setShowSuggested(true)}
          >
            Suggested Feeds
          </button>
        </div>
      )}

      {/* FEEDS LIST */}
      {feeds.length > 0 && (
        <div className="discover-list">
          {feeds.map((feed, index) => (
            <FeedCard key={index} feed={feed} />
          ))}
        </div>
      )}

      {showSuggested && (
        <SuggestedFeedsModal
          onClose={() => setShowSuggested(false)}
          onAdd={handleAddFeed}
        />
      )}
    </div>
  )
}