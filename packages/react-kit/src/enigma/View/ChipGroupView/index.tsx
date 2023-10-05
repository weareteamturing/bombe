import { Stack, Chip, ItemList } from '../../..';
import { ChipGroupView } from '../../types';

type Props = {
  view: ChipGroupView;
};

const ChipGroupView = ({ view: { size = 'm', chips = [] } }: Props) => (
  <Stack gapX={1} gapY={1}>
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
