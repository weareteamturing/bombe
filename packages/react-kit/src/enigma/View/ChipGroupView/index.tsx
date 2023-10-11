import Chip from '../../../core/Chip';
import ItemList from '../../../core/ItemList';
import Stack from '../../../core/Stack';
import { ChipGroupView as ChipGroupViewType } from '../../types';

type Props = {
  view: ChipGroupViewType;
};

const ChipGroupView = ({
  view: {
    chips = [],
    chipGroupProps: { size = 'm', gapX = 1, gapY = 1 },
  },
}: Props) => (
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
