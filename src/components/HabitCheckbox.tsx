import { Habit } from '@/types'

interface HabitProps {
  habit: Habit
  onToggle: (habit: Habit) => void
  checked: boolean
}

const HabitCheckbox = ({ habit, onToggle, checked = false }: HabitProps) => {
  return (
    <div className="checkbox-wrapper-4">
      <input
        className="inp-cbx"
        id={habit.name}
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(habit)}
      />
      <label className="cbx" htmlFor={habit.name}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check-4"></use>
          </svg>
        </span>
        <span>{habit.name}</span>
      </label>
      <svg className="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  )
}

export default HabitCheckbox