import { SpaceKey } from '@teamturing/token-studio';
import { isNullable } from '@teamturing/utils';
import { ComponentType, ReactNode, SVGProps } from 'react';
import { ResponsiveValue } from 'styled-system';

import Grid, { GridProps, GridUnitProps } from '../Grid';
import ItemList, { ItemListProps } from '../ItemList';
import StyledIcon from '../StyledIcon';
import Text from '../Text';
import View from '../View';
type DescriptionListItemDescriptionType<T extends Record<string, any>> = {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string | ReactNode;
  renderValue: (item: T) => ReactNode;
};

type Props<T extends Record<string, any>, TD extends Record<string, DescriptionListItemDescriptionType<T>>> = {
  item: T;
  itemDescriptions: TD;
  picks: (keyof TD)[];
  renderTitle?: (title: ReactNode) => ReactNode;
  renderDescription?: (description: ReactNode) => ReactNode;
  titleUnitSize?: GridUnitProps['size'];
  descriptionUnitSize?: GridUnitProps['size'];
  gapItem?: ResponsiveValue<SpaceKey>;
} & Pick<GridProps, 'gapX' | 'gapY'> &
  Omit<ItemListProps<DescriptionListItemDescriptionType<T>>, 'items' | 'renderItem'>;

const DescriptionList = <
  T extends Record<string, any>,
  TD extends Record<string, DescriptionListItemDescriptionType<T>>,
>({
  item,
  itemDescriptions,
  renderTitle = (title) => (
    <Text typography={'xs'} color={'text/neutral/subtler'}>
      {title}
    </Text>
  ),
  renderDescription = (description) => (
    <Text typography={'xs'} color={'text/neutral'}>
      {description}
    </Text>
  ),
  picks,
  gapX = 2,
  gapY = 1,
  gapItem = 3,
  titleUnitSize = [1, 1 / 8, 1 / 8],
  descriptionUnitSize = [1, 7 / 8, 7 / 8],
  ...props
}: Props<T, TD>) => (
  <ItemList
    items={picks.map((pick) => itemDescriptions[pick]!)}
    renderItem={({ icon, title, renderValue }) => {
      const description = renderValue(item);
      return (
        <Grid gapX={gapX} gapY={gapY}>
          <Grid.Unit size={titleUnitSize}>
            <View display={'flex'} alignItems={'center'} flexWrap={'nowrap'} sx={{ columnGap: 1 }}>
              {icon ? <StyledIcon icon={icon} size={16} color={'icon/neutral'} /> : null}
              {renderTitle(title)}
            </View>
          </Grid.Unit>
          <Grid.Unit size={descriptionUnitSize}>
            {renderDescription(!isNullable(description) ? description : '-')}
          </Grid.Unit>
        </Grid>
      );
    }}
    renderItemWrapper={(children, _, i) => (
      <View key={i} sx={{ marginTop: i > 0 ? gapItem : 0 }}>
        {children}
      </View>
    )}
    {...props}
  />
);

export default DescriptionList;
export type { Props as DescriptionListProps };
