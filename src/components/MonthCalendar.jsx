import PropTypes from 'prop-types';

const MonthCalendar = ({ monthName, monthNumber, numDays, startDay }) => {
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // Generate array of days
  const days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push(i);
  }

  // Create empty slots for days before the start of the month
  const emptySlots = [];
  for (let i = 0; i < startDay; i++) {
    emptySlots.push(i);
  }

  // Determine day type for styling
  const getDayType = (day) => {
    const dayOfWeek = (startDay + day - 1) % 7;
    
    // Weekend (Friday = 5, Saturday = 6 in Arabic/ISO week)
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return 'weekend';
    }
    
    // Sample holidays - can be customized
    const holidays = {
      September: [1, 2, 3], // Example holidays
      October: [],
      November: [15],
      December: [25]
    };
    
    if (holidays[monthName]?.includes(day)) {
      return 'holiday';
    }
    
    return 'normal';
  };

  return (
    <div className="month-calendar">
      <h3 className="month-title">{monthNumber} - {monthName}</h3>
      <div className="weekdays-row">
        {weekDays.map((day) => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="days-grid">
        {emptySlots.map((_, index) => (
          <div key={`empty-${index}`} className="day-cell empty"></div>
        ))}
        {days.map((day) => (
          <div 
            key={day} 
            className={`day-cell ${getDayType(day)}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

MonthCalendar.propTypes = {
  monthName: PropTypes.string.isRequired,
  monthNumber: PropTypes.number.isRequired,
  numDays: PropTypes.number.isRequired,
  startDay: PropTypes.number.isRequired
};

export default MonthCalendar;

