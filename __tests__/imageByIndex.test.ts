import imageByIndex, { images } from '@/utils/imageByIndex';

describe('imageByIndex', () => {
  it('returns the correct image for valid index', () => {
    expect(imageByIndex(0)).toBe(images[0]);
    expect(imageByIndex(1)).toBe(images[1]);
  });

  it('wraps around when index exceeds length', () => {
    expect(imageByIndex(images.length)).toBe(images[0]);
  });
});
