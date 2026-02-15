import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import MealItem from '../MealItem/MealItem';
import './DaySection.css';

export default function DaySection({ day, date, meals = [] }) {
  return (
    <div className="day-section">
      <div className="day-section-header">
        <h2 className="day-section-title">
          {day} <span className="day-section-date">· {date}</span>
        </h2>
        <div className="day-section-actions">
          <button className="day-section-btn">
            <Plus />
          </button>
          <button className="day-section-btn">
            <MoreHorizontal />
          </button>
        </div>
      </div>
      
      <div className="day-section-meals">
        {meals && meals.map((meal, idx) => (
          <MealItem key={meal.id || idx} meal={meal} isLast={idx === meals.length - 1} />
        ))}
      </div>
    </div>
  );
}
