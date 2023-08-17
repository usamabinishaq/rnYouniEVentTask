import moment, {Moment} from 'moment';

export const utcDateToString = (momentInUTC: Moment): string => {
  let date = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return date;
};
