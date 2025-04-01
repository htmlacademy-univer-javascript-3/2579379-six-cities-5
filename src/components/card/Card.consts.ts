type Size = 'small' | 'medium';

interface SizeParams {
  width: number;
  height: number;
}

export const cardsSizes: Record<Size, SizeParams> = {
  small: {width: 150, height: 110},
  medium: {width: 260, height: 200},
};

