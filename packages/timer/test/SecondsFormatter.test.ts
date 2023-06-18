import { SecondsFormatter, SecondsFormats } from '../src';

const D = 60 * 60 * 24;
const H = 60 * 60;
const M = 60;

const Suites: { type: SecondsFormats; sec: any; expect: string }[] = [
  {
    type: 'm:ss',
    sec: 2 * M + 3,
    expect: '2:03',
  },
  {
    type: 'm:ss',
    sec: 0,
    expect: '0:00',
  },
  {
    type: 'm:ss',
    sec: '123',
    expect: '0:00',
  },
  {
    type: 'm:ss',
    sec: undefined,
    expect: '0:00',
  },
  {
    type: 'm:ss',
    sec: -1,
    expect: '0:00',
  },
  {
    type: 'm:ss',
    sec: H + M + 59,
    expect: '1:59',
  },
  {
    type: 'mm:ss',
    sec: 2 * M + 3,
    expect: '02:03',
  },
  {
    type: 'mm:ss_total_min',
    sec: 100 * M + 3,
    expect: '100:03',
  },
  {
    type: 'mm:ss_total_min',
    sec: 61 * M + 3,
    expect: '61:03',
  },
  {
    type: 'hh:mm:ss',
    sec: 2 * H,
    expect: '02:00:00',
  },
  {
    type: 'hh:mm:ss',
    sec: D,
    expect: '00:00:00',
  },
  {
    type: 'hh:mm:ss',
    sec: M + 1,
    expect: '00:01:01',
  },
  {
    type: 'hh:mm:ss_total_hour',
    sec: H * 25 + M + 1,
    expect: '25:01:01',
  },
  {
    type: 'hh:mm:ss_total_hour',
    sec: H * 1000 + M + 1,
    expect: '1000:01:01',
  },
  {
    type: 'h:mm:ss',
    sec: 9 * H,
    expect: '9:00:00',
  },
  {
    type: 'h:mm:ss',
    sec: 23 * H,
    expect: '23:00:00',
  },
  // Logicals
  {
    type: 'due_date',
    sec: 3 * D + 2 * H,
    expect: '3일',
  },
  {
    type: 'due_date',
    sec: 2 * H,
    expect: '2시간',
  },
  {
    type: 'due_date',
    sec: M,
    expect: '1분',
  },
  {
    type: 'due_date',
    sec: 59,
    expect: '0분',
  },
  {
    type: 'due_date_hh:mm:ss',
    sec: D + H + M,
    expect: '1일',
  },
  {
    type: 'due_date_hh:mm:ss',
    sec: 23 * H + 4 * M + 20,
    expect: '23:04:20',
  },
  {
    type: 'study_duration',
    sec: 100 * H + 4 * M + 20,
    expect: '100시간 4분',
  },
  {
    type: 'study_duration',
    sec: 4 * M + 20,
    expect: '4분',
  },
  {
    type: 'study_duration',
    sec: 59,
    expect: '59초',
  },
];

it('SecondsFormatter', () => {
  Suites.forEach(({ sec, type, expect: result }) => expect(SecondsFormatter.format(sec, type)).toBe(result));
  expect.assertions(Suites.length);
});
