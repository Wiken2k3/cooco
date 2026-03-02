import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FeedCard from '../../components/FeedCard/FeedCard'
import DiscoverEmpty from '../../components/DiscoverEmpty/DiscoverEmpty'
import SuggestedFeedsModal from '../../components/SuggestedFeedsModal/SuggestedFeedsModal'
import './Discover.css'

export default function Discover() {
  const navigate = useNavigate()
  const [activeFeeds, setActiveFeeds] = useState([]) // Danh sách feed đã chọn
  const [showSuggested, setShowSuggested] = useState(false)

  // Nhận vào full object feed, không tạo mới object bị thiếu thuộc tính
  const handleAddFeed = (feed) => {
    setActiveFeeds(prev => [...prev, feed])
  }

  return (
    <div className="discover-container">
      {activeFeeds.length === 0 ? (
        <DiscoverEmpty onOpenSuggested={() => setShowSuggested(true)} />
      ) : (
        <div className="discover-list">
          {activeFeeds.map((feed) => (
            <FeedCard
              key={feed.id}
              feed={feed}
              onOpen={() => navigate(`/discover/detail/${feed.id}`)}
            />
          ))}
        </div>
      )}

      {showSuggested && (
        <SuggestedFeedsModal
          onClose={() => setShowSuggested(false)}
          onAdd={handleAddFeed}
          existingFeeds={activeFeeds}
        />
      )}
    </div>
  )
}