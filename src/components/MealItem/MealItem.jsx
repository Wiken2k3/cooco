import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import './MealItem.css';

export default function MealItem({ meal }) {
  return (
    <div className="meal-item">
      <img 
        src={meal.image} 
        alt={meal.name} 
        className="meal-image" 
      />
      <span className="meal-name">
        {meal.name}
      </span>
      <button className="meal-more-btn">
        <MoreHorizontal />
      </button>
    </div>
  );
}
