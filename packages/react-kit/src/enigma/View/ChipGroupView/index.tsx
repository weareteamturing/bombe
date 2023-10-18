import Chip from '../../../core/Chip';
import ItemList from '../../../core/ItemList';
import Space from '../../../core/Space';
import Stack from '../../../core/Stack';
import { ChipGroupViewType } from '../../types';

type Props = {
  view: ChipGroupViewType;
};

const ChipGroupView = ({
  view: { chips = [], chipGroupProps = { size: 'm', gapX: 1, gapY: 1 }, spaceProps },
}: Props) => (
  <Space {...spaceProps}>
    <Stack gapX={chipGroupProps.gapX} gapY={chipGroupProps.gapY}>
      <ItemList
        items={chips}
        renderItem={({ text, variant }) => (
          <Chip size={chipGroupProps.size} variant={variant}>
            {text}
          </Chip>
        )}
        renderItemWrapper={(children, { text, variant }, i) => (
          <Stack.Item key={`${text}-${variant}-${i}`}>{children}</Stack.Item>
        )}
      />
    </Stack>
  </Space>
);

export default ChipGroupView;
