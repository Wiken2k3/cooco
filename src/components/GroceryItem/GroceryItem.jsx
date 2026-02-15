import { useState } from 'react'
import './GroceryItem.css'

export default function GroceryItem({ item }) {
  const [checked, setChecked] = useState(item.checked)
  const [amount, setAmount] = useState(item.amount)

  return (
    <div className={`grocery-item ${checked ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />

      <span className="grocery-name">{item.name}</span>

      <div className="grocery-amount">
        <button onClick={() => setAmount(Math.max(0, amount - 1))}>−</button>
        <span>{amount} {item.unit}</span>
        <button onClick={() => setAmount(amount + 1)}>+</button>
      </div>
    </div>
  )
}
