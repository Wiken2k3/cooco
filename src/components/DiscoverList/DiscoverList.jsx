import DiscoverRow from '../DiscoverRow/DiscoverRow'
import './DiscoverList.css'

export default function DiscoverList() {
  return (
    <div className="discover-list">
      <h3>Popular</h3>
      <DiscoverRow />
      <DiscoverRow />
    </div>
  )
}
