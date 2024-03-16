const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  
  function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const today = new Date();
  
    document.getElementById('monthYear').innerText = `${monthNames[month]} ${year}`;
  
    let calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';
  
    for (let i = 0; i < firstDay.getDay(); i++) {
      let dayCell = document.createElement('div');
      dayCell.classList.add('calendar-day', 'empty');
      calendarBody.appendChild(dayCell);
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      let dayCell = document.createElement('div');
      dayCell.classList.add('calendar-day');
      dayCell.innerText = day;
      
      if (
        year === today.getFullYear() &&
        month === today.getMonth() &&
        day === today.getDate()
      ) {
        dayCell.classList.add('today');
      }
      
      calendarBody.appendChild(dayCell);
    }
  }
  
  function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
  }
  
  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  }
  
  generateCalendar(currentMonth, currentYear);
  