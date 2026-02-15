import { ArrowDown } from 'lucide-react'
import './FeedCard.css'

export default function FeedCard({ feed }) {
  return (
    <div className="feed-card">
      <div className="feed-header">
        <div className="feed-source">
          <div className="feed-avatar">ba</div>

          <div className="feed-meta">
            <div className="feed-name">{feed.source}</div>
            <div className="feed-time">{feed.time}</div>
          </div>
        </div>
      </div>

      <div className="feed-image-wrapper">
        <img
          src={feed.image}
          alt=""
          className="feed-image"
        />

        <button className="download-btn">
          <ArrowDown size={20} strokeWidth={2.6} />
        </button>
      </div>
    </div>
  )
}
