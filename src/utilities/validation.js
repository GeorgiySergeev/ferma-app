import { Report } from 'notiflix/build/notiflix-report-aio';
export const validateCheckoutForm = ({ name, phone }) => {
  const errors = {};
  const phoneRegex = /^\+?\d{10,12}$/;

  if (!name.trim()) {
    errors.name = "Введіть ім'я";
    Report.warning(errors.name, 'Введіть бульше ваше імя');
  } else if (!phoneRegex.test(phone)) {
    errors.phone = 'Введіть телефон';
    Report.warning(errors.phone, 'Введіть бульше ваш  телефон');
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
