import icons from '@teamturing/icons';

import {
  ChipProps,
  StackProps,
  TextProps,
  SpaceProps,
  GridProps,
  GridUnitProps,
  StyledIconProps,
  ImageProps,
  AsProp,
} from '../..';

/**
 * View Related Model
 */
export type TextViewType = {
  text: string;
  textProps?: {} & Pick<TextProps, 'typography' | 'textAlign' | 'color'> & AsProp;
  spaceProps?: Omit<SpaceProps, 'sx'>;
};
export type ImageViewType = {
  src: ImageProps['src'];
  alt: ImageProps['alt'];
  width: ImageProps['width'];
  height: ImageProps['height'];
  spaceProps?: Omit<SpaceProps, 'sx'>;
};
export type IconViewType = {
  icon: keyof typeof icons;
  iconProps?: {} & Pick<StyledIconProps, 'size' | 'color'>;
  spaceProps?: Omit<SpaceProps, 'sx'>;
};
export type ChipGroupViewType = {
  chips: Array<{ text: string; variant: ChipProps['variant'] }>;
  chipGroupProps?: {} & Pick<ChipProps, 'size'> & Pick<StackProps, 'gapX' | 'gapY'>;
  spaceProps?: Omit<SpaceProps, 'sx'>;
};
export type GridViewType = {
  units: Array<{ views: ViewContainerType[]; unitProps: Pick<GridUnitProps, 'size' | 'order'> }>;
  gridProps?: Pick<GridProps, 'gapX' | 'gapY' | 'alignItems' | 'justifyContent' | 'wrap'>;
  spaceProps?: Omit<SpaceProps, 'sx'>;
};

export type ViewType = TextViewType | ImageViewType | IconViewType | ChipGroupViewType | GridViewType;
export type ViewComponentType = 'TextView' | 'ImageView' | 'IconView' | 'ChipGroupView' | 'GridView';

export interface ViewContainerType {
  id: string;
  viewComponentType: ViewComponentType;
  view: ViewType;
}

/**
 * Layout Related Model
 */
export interface ViewContainerDetailType {
  viewContainerId: string;
  spaceProps?: Omit<SpaceProps, 'sx'>;
}

export type SingleColumnLayoutType = {
  main: ViewContainerDetailType[];
};

export type LayoutType = SingleColumnLayoutType;
export type LayoutComponentType = 'SingleColumnLayout';

export interface LayoutContainerType {
  layoutComponentType: LayoutComponentType;
  layout: LayoutType;
}

export interface ResponsiveLayoutContainerType {
  mobile: LayoutContainerType;
  tablet?: LayoutContainerType;
  desktop?: LayoutContainerType;
}

/**
 * Section Related Model
 */
export interface EnigmaSectionType {
  id: string;
  views: ViewContainerType[];
  responsiveLayout: ResponsiveLayoutContainerType;
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
