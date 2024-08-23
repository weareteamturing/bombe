import { useMount } from '@teamturing/react-native-kit';
import type { EffectCallback, ReactElement } from 'react';

type Props = { onMount: EffectCallback; children?: ReactElement | null };
const OnMountEvent = ({ onMount, children = null }: Props) => {
  useMount(onMount);
  return children;
};

export { OnMountEvent };
