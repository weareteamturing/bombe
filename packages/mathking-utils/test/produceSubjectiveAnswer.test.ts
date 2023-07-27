import { produceSubjectiveAnswer } from '../src';

describe('produceSubjectiveAnswer', () => {
  it('type when length === 0', () => {
    expect(produceSubjectiveAnswer('', 1)).toBe('1');
    expect(produceSubjectiveAnswer('', 'minus')).toBe('-');
    expect(produceSubjectiveAnswer('', -999 as any)).toBe('');
    expect(produceSubjectiveAnswer('', 0)).toBe('0');
    expect(produceSubjectiveAnswer('', 2)).toBe('2');
    expect(produceSubjectiveAnswer('', 5)).toBe('5');
    expect(produceSubjectiveAnswer('', 'delete')).toBe('');
  });

  it('type when length === 1, handle zero correctly', () => {
    expect(produceSubjectiveAnswer('-', 'minus')).toBe('-');
    expect(produceSubjectiveAnswer('-', 1)).toBe('-1');
    expect(produceSubjectiveAnswer('-', 0)).toBe('0');
    expect(produceSubjectiveAnswer('-', 'delete')).toBe('');
    expect(produceSubjectiveAnswer('-', 5)).toBe('-5');
    expect(produceSubjectiveAnswer('0', 0)).toBe('0');
    expect(produceSubjectiveAnswer('0', 1)).toBe('1');
    expect(produceSubjectiveAnswer('0', 'minus')).toBe('0');
    expect(produceSubjectiveAnswer('0', 'delete')).toBe('');
    expect(produceSubjectiveAnswer('0', 9)).toBe('9');
    expect(produceSubjectiveAnswer('1', 1)).toBe('11');
  });

  it('type when length >= 2', () => {
    expect(produceSubjectiveAnswer('-0', 0)).toBe('0');
    expect(produceSubjectiveAnswer('-4', 0)).toBe('-40');
    expect(produceSubjectiveAnswer('-4', 'minus')).toBe('-4');
    expect(produceSubjectiveAnswer('-4', 'delete')).toBe('-');
    expect(produceSubjectiveAnswer('-4', 5)).toBe('-45');
    expect(produceSubjectiveAnswer('11', 1)).toBe('111');
    expect(produceSubjectiveAnswer('12', 'minus')).toBe('12');
    expect(produceSubjectiveAnswer('12', 'delete')).toBe('1');
    expect(produceSubjectiveAnswer('-9999999', 5)).toBe('-99999995');
    expect(produceSubjectiveAnswer('12345678', 9)).toBe('123456789');
  });

  it('max length test', () => {
    expect(produceSubjectiveAnswer('111122223333444', 4)).toBe('1111222233334444');
    expect(produceSubjectiveAnswer('111122223333444', 'minus')).toBe('111122223333444');
    expect(produceSubjectiveAnswer('1111222233334444', 5)).toBe('1111222233334444');
    expect(produceSubjectiveAnswer('1111222233334444', 'minus')).toBe('1111222233334444');
  });
});
