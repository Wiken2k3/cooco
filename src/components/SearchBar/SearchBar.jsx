import { Search } from 'lucide-react'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className="search-bar">
      <Search />
      <input placeholder="Search recipes, ingredients..." />
    </div>
  )
}
