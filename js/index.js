const createCalendar = (elem, year, month) => {
  const currentMonth = month - 1;
  const date = new Date(year, currentMonth);

  let calendar =
    '<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr><tr>';

  for (let i = 1; i < getDay(date); i++) {
    calendar += '<td></td>';
  }

  while (date.getMonth() === currentMonth) {
    calendar += `<td>${date.getDate()}</td>`;

    if (getDay(date) === 7) {
      calendar += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 1) {
    for (let i = getDay(date); i <= 7; i++) {
      calendar += '<td></td>';
    }
  }

  calendar += '</tr>';

  elem.insertAdjacentHTML('afterbegin', `<table>${calendar}</table>`);
};

const getDay = date => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
};

createCalendar(calendar, 2019, 9);
