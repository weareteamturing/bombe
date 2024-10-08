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
    sec: 15.5,
    expect: '0:15',
  },
  {
    type: 'm:ss',
    sec: 155.55555,
    expect: '2:35',
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
    expect: '61:59',
  },
  {
    type: 'mm:ss',
    sec: 2 * M + 3,
    expect: '02:03',
  },
  {
    type: 'hh:mm:ss',
    sec: 2 * H,
    expect: '02:00:00',
  },
  {
    type: 'hh:mm:ss',
    sec: D,
    expect: '24:00:00',
  },
  {
    type: 'hh:mm:ss',
    sec: M + 1,
    expect: '00:01:01',
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
  {
    type: 'study_duration_en',
    sec: 100 * H + 4 * M + 20,
    expect: '100 Hours 4 Minutes',
  },
  {
    type: 'study_duration_en',
    sec: 4 * M + 20,
    expect: '4 Minutes',
  },
  {
    type: 'study_duration_en',
    sec: 59,
    expect: '59 Seconds',
  },
  {
    type: 'study_duration_en',
    sec: 1,
    expect: '1 Second',
  },
  {
    type: 'hh:mm:ss_on_demand',
    sec: 1,
    expect: '0:01',
  },
  {
    type: 'hh:mm:ss_on_demand',
    sec: 65,
    expect: '1:05',
  },
  {
    type: 'hh:mm:ss_on_demand',
    sec: H + 36 * M + 1,
    expect: '1:36:01',
  },
];

it('SecondsFormatter', () => {
  Suites.forEach(({ sec, type, expect: result }) => expect(SecondsFormatter.format(sec, type)).toBe(result));
  expect.assertions(Suites.length);
});
