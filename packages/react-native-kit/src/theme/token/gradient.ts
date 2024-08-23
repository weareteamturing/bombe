export type GradientProps = {
  colors: string[];
  locations: number[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

const gradient: Record<
  | 'gradient1'
  | 'gradient2'
  | 'gradient3'
  | 'gradient4'
  | 'gradient5'
  | 'shortsPlayerTop'
  | 'shortsPlayeBottomPlaybackHidden'
  | 'shortsPlayerBottomPlaybackShowing'
  | 'problemSolveBottomSheet'
  | 'fkffkf'
  | 'friendInviteTab'
  | 'gold',
  GradientProps
> = {
  gradient1: {
    colors: ['#03216D', '#3F28D1', '#F14BFF'],
    locations: [0, 0.39, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  gradient2: {
    colors: ['#8155FD', '#3624FF'],
    locations: [0.08, 0.92],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  gradient3: {
    colors: ['#0E0E0E', '#595959'],
    locations: [0.1, 0.9],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  gradient4: {
    colors: ['#8E6CF0', '#CF75F3'],
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  gradient5: {
    colors: ['#C6B5F6', '#C6B5F6'],
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },

  shortsPlayerTop: {
    colors: ['#00000066', '#0000001A', '#FFFFFF00'],
    locations: [0, 0.5, 1],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  shortsPlayeBottomPlaybackHidden: {
    colors: ['#00000000', '#0000001A', '#00000066'],
    locations: [0, 0.5, 1],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  shortsPlayerBottomPlaybackShowing: {
    colors: ['#00000000', '#0000004D', '#00000099'],
    locations: [0, 0.54, 1],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  problemSolveBottomSheet: {
    colors: ['#00000000', '#00000044'],
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  fkffkf: {
    colors: ['#273863', '#372763'],
    locations: [0, 1],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  friendInviteTab: {
    colors: ['#CE99F1', '#F9CFAF', '#F9F5DC'],
    locations: [0, 0.55, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },

  gold: {
    colors: ['#FEE68F', '#FFFBEF', '#FEEDB2', '#FFC85E'],
    locations: [0.26, 0.39, 0.51, 0.79],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
};
export type GradientType = keyof typeof gradient;

export { gradient };
