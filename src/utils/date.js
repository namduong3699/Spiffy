import dayjs from 'dayjs';
import { parse, parseISO } from 'date-fns';

export const dateFormat = (date, format = 'DD MMM YYYY, HH:mm A') => dayjs(date).format(format);
export const parseDateString = (date, fromFormat) => (fromFormat ? parse(date, fromFormat) : parseISO(date));
