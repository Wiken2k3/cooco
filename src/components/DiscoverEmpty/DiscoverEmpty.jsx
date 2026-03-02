import { Sparkles } from 'lucide-react'
import './DiscoverEmpty.css'

export default function DiscoverEmpty({ onOpenSuggested }) {
  return (
    <div className="discover-empty">
      <Sparkles size={48} strokeWidth={1.5} className="empty-icon" />
      <h3>Discover</h3>
      <p>Add feeds to discover new recipes</p>
      <button className="suggested-btn" onClick={onOpenSuggested}>
        Suggested Feeds
      </button>
    </div>
  )
}