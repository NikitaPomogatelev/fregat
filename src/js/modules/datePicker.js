import { Datepicker } from 'vanillajs-datepicker';
import { DateRangePicker } from 'vanillajs-datepicker';
import ru from 'vanillajs-datepicker/js/i18n/locales/ru';

const datePicker = () => {
    Object.assign(Datepicker.locales, ru);

    const elem = document.querySelector('#range-date');
    const rangepicker = new DateRangePicker(elem, {
        language: 'ru'
  });

}


export default datePicker;