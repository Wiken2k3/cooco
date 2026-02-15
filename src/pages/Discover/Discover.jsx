import { Plus } from 'lucide-react'
import { useState } from 'react'
import FeedCard from '../../components/FeedCard/FeedCard'
import AddFeedModal from '../../components/AddFeedModal/AddFeedModal'
import IconButton from '../../components/ui/IconButton'
import './Discover.css'

export default function Discover() {
  const [showModal, setShowModal] = useState(false)

  const feeds = [
    {
      id: 1,
      source: 'Bon Appétit',
      time: '5 hours ago',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543'
    },
    {
      id: 2,
      source: 'Bon Appétit',
      time: 'Yesterday',
      image:
        'https://images.unsplash.com/photo-1551218808-94e220e084d2'
    }
  ]

  return (
    <div className="discover-page">
      <div className="discover-header">
        <h1 className="discover-title">Discover</h1>

        <IconButton
          icon={Plus}
          onClick={() => setShowModal(true)}
        />
      </div>

      <div className="discover-list">
        {feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </div>

      {showModal && (
        <AddFeedModal
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
