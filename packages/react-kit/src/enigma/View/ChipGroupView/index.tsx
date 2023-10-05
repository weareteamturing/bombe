import { Stack, Chip, ItemList } from '../../..';
import { ChipGroupView as ChipGroupViewType } from '../../types';

type Props = {
  view: ChipGroupViewType;
};

const ChipGroupView = ({ view: { size = 'm', gapX = 1, gapY = 1, chips = [] } }: Props) => (
  <Stack gapX={gapX} gapY={gapY}>
    <ItemList
      items={chips}
      renderItem={({ text, variant }) => (
        <Chip size={size} variant={variant}>
          {text}
        </Chip>
      )}
      renderItemWrapper={(children, { text, variant }, i) => (
        <Stack.Item key={`${text}-${variant}-${i}`}>{children}</Stack.Item>
      )}
    />
  </Stack>
);

export default ChipGroupView;
