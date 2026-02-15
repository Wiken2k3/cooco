import GrocerySection from '../../components/GrocerySection/GrocerySection'
import groceriesData from '../../data/groceries'
import './Groceries.css'

export default function Groceries() {
  return (
    <div className="groceries-container">
      <div className="groceries-content">
        <div className="groceries-list">
          {groceriesData.map(section => (
            <GrocerySection
              key={section.id}
              section={section}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
