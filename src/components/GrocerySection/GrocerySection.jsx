import GroceryItem from '../GroceryItem/GroceryItem'
import './GrocerySection.css'

export default function GrocerySection({ section }) {
  return (
    <div className="grocery-section">
      <div className="grocery-section-title">
        {section.name}
      </div>

      <div className="grocery-section-items">
        {section.items.map(item => (
          <GroceryItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}
