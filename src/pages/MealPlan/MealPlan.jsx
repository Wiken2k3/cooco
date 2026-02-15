import DaySection from '../../components/DaySection/DaySection'
import mealData from '../../data/meal'
import './MealPlan.css'

export default function MealPlan() {
  return (
    <div className="meal-plan-container">
      <div className="meal-plan-list">
        {mealData.map(day => (
          <DaySection
            key={day.date}
            day={day.label.split(' · ')[0]}
            date={day.label.split(' · ')[1]}
            meals={day.meals}
          />
        ))}
      </div>
    </div>
  )
}
