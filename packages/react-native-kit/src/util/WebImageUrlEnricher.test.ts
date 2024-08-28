import { appendImageSizeQueryParams } from './WebImageUrlEnricher';

describe('appendImageSizeQueryParams', () => {
  it('url이 올바른 경우', () => {
    expect(appendImageSizeQueryParams({ url: 'http://test.jpg', desiredWidth: 100 })).toBe('http://test.jpg?w=256');
    expect(appendImageSizeQueryParams({ url: 'http://test.jpg?x=1&t=5', desiredWidth: 100 })).toBe(
      'http://test.jpg?x=1&t=5&w=256',
    );
  });

  it('url이 올바르지 않은 경우', () => {
    expect(appendImageSizeQueryParams({ url: 1 as any, desiredWidth: 100 })).toBe(1);
  });
});
