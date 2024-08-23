import type { EffectCallback, ReactElement } from 'react';

import { useMount } from '../hook';

type Props = { onMount: EffectCallback; children?: ReactElement | null };
const OnMountEvent = ({ onMount, children = null }: Props) => {
  useMount(onMount);
  return children;
};

export { OnMountEvent };
