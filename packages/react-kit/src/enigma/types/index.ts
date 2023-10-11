import { ImgHTMLAttributes } from 'react';

import { ChipProps, StackProps, TextProps, SpaceProps } from '../..';

/**
 * View Related Model
 */
export type TextView = {
  text: string;
  textProps?: TextProps;
};
export type ImageView = Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'loading'>;

export type ChipGroupView = {
  size: ChipProps['size'];
  gapX: StackProps['gapX'];
  gapY: StackProps['gapY'];
  chips: Array<{ text: string; variant: ChipProps['variant'] }>;
};

export type View = TextView | ImageView | ChipGroupView;
export type ViewComponentType = 'TextView' | 'ImageView' | 'ChipGroupView';

export interface IViewContainer {
  id: string;
  viewComponentType: ViewComponentType;
  view: View;
}

/**
 * Layout Related Model
 */
export interface IViewContainerDetail {
  viewContainerId: string;
  spaceProps: SpaceProps;
}

export type SingleColumnLayout = {
  main: IViewContainerDetail[];
};

export type Layout = SingleColumnLayout;
export type LayoutComponentType = 'SingleColumnLayout';

export interface ILayoutContainer {
  layoutComponentType: LayoutComponentType;
  layout: Layout;
}

export interface IResponsiveLayoutContainer {
  mobile: ILayoutContainer;
  tablet?: ILayoutContainer;
  desktop?: ILayoutContainer;
}

/**
 * Section Related Model
 */
export interface ISection {
  id: string;
  views: IViewContainer[];
  responsiveLayout: IResponsiveLayoutContainer;
}

// const section: ISection = {
//   id: 'book-detail-section',
//   views: [
//     {
//       id: 'title-view-1',
//       viewComponentType: 'TextView',
//       view: {
//         text: '2024 수능,\nEBS 연계 문제를 잡는 사람이 승리합니다.',
//         textProps: {
//           typography: 'xxl/bold',
//           color: 'text/neutral',
//           as: 'h2',
//         },
//       },
//     },
//     {
//       id: 'description-view-1',
//       viewComponentType: 'TextView',
//       view: {
//         text: '평가원 “2024학년도 수능, EBS 연계 체감도 높여 출제"\n올해 2024 수능, 연계 문제 대비가 그 어느 때보다 중요한 이유입니다',
//         textProps: {
//           typography: 'm',
//           color: 'text/neutral/subtle',
//           as: 'p',
//         },
//       },
//     },
//     {
//       id: 'description-view-2',
//       viewComponentType: 'TextView',
//       view: {
//         text: '수능, EBS 연계율 50% 이상',
//         textProps: {
//           typography: 'm',
//           color: 'text/neutral/subtle',
//           as: 'h2',
//         },
//       },
//     },
//     {
//       id: 'description-view-2',
//       viewComponentType: 'TextView',
//       view: {
//         text: '작년 2023학년도 수능과 마찬가지로, 올해 2024 수능 역시 문항의 50% 이상이 수능특강과 수능완성에서 연계됩니다.\n특히 수학은 3, 4점 문항의 다수가 EBS 연계 문항일 것으로 예상됩니다.',
//         textProps: {
//           typography: 'm',
//           color: 'text/neutral/subtle',
//           as: 'p',
//         },
//       },
//     },
//   ],
//   responsiveLayout: {
//     mobile: {
//       layoutComponentType: 'SingleColumnLayout',
//       layout: {
//         main: [
//           {
//             viewContainerId: 'title-view-1',
//             spaceProps: {
//               pt: 20,
//               px: 5,
//             },
//           },
//           {
//             viewContainerId: 'description-view-1',
//             spaceProps: {
//               mt: 2,
//               px: 5,
//               pb: 20,
//             },
//           },
//           {
//             viewContainerId: 'title-view-2',
//             spaceProps: {
//               pt: 20,
//               px: 5,
//             },
//           },
//           {
//             viewContainerId: 'description-view-2',
//             spaceProps: {
//               mt: 2,
//               px: 5,
//               pb: 20,
//             },
//           },
//           {
//             viewContainerId: 'image-view-1',
//             spaceProps: {},
//           },
//         ],
//       },
//     },
//   },
// };
