import { parseSeconds } from './internal/parseSeconds';

type Formatter = (totalSecond: number) => string;

type LogicalFormats = 'due_date' | 'due_date_hh:mm:ss' | 'study_duration';
type GeneralFormats = 'mm:ss' | 'm:ss' | 'hh:mm:ss' | 'h:mm:ss';
export type SecondsFormats = LogicalFormats | GeneralFormats;

const Formatters: Record<SecondsFormats, Formatter> = {
  'm:ss': (totalSecond) => {
    const { totalMinute, onlySecond } = parseSeconds(totalSecond);
    return `${totalMinute}:${lz(onlySecond)}`;
  },
  'mm:ss': (totalSecond) => {
    const { totalMinute, onlySecond } = parseSeconds(totalSecond);
    return `${lz(totalMinute)}:${lz(onlySecond)}`;
  },
  'hh:mm:ss': (totalSecond) => {
    const { onlyMinute, onlySecond, totalHour } = parseSeconds(totalSecond);
    return `${lz(totalHour)}:${lz(onlyMinute)}:${lz(onlySecond)}`;
  },
  'h:mm:ss': (totalSecond) => {
    const { onlyMinute, onlySecond, totalHour } = parseSeconds(totalSecond);
    return `${totalHour}:${lz(onlyMinute)}:${lz(onlySecond)}`;
  },
  'due_date': (totalSecond) => {
    const { totalDay, totalHour, totalMinute } = parseSeconds(totalSecond);
    if (totalDay >= 1) {
      return `${totalDay}일`;
    }
    if (totalHour >= 1) {
      return `${totalHour}시간`;
    }
    return `${Math.max(0, totalMinute)}분`;
  },
  'due_date_hh:mm:ss': (totalSecond) => {
    const { totalDay } = parseSeconds(totalSecond);

    if (totalDay >= 1) {
      return `${totalDay}일`;
    }
    return Formatters['hh:mm:ss'](totalSecond);
  },
  'study_duration': (totalSecond) => {
    const { totalHour, onlyMinute } = parseSeconds(totalSecond);

    if (totalHour >= 1) {
      return `${totalHour}시간 ${onlyMinute}분`;
    }
    if (onlyMinute >= 1) {
      return `${onlyMinute}분`;
    }
    return `${Math.max(0, totalSecond)}초`;
  },
};
const InvalidateIntervalSeconds: Record<SecondsFormats, number> = {
  'm:ss': 1,
  'mm:ss': 1,
  'h:mm:ss': 1,
  'hh:mm:ss': 1,
  'due_date': 60,
  'due_date_hh:mm:ss': 1,
  'study_duration': 1,
};

// Append leading zeros
function lz(number: number | undefined, len = 2): string {
  if (typeof number !== 'number') return '';
  return (number + '').padStart(len, '0');
}

export const SecondsFormatter = {
  get: (type: SecondsFormats): Formatter => Formatters[type] || Formatters['hh:mm:ss'],
  format: (totalSeconds: number, type: SecondsFormats) => SecondsFormatter.get(type)(totalSeconds),
  invalidateIntervalSec: (type: SecondsFormats) => InvalidateIntervalSeconds[type] || 60,
};
