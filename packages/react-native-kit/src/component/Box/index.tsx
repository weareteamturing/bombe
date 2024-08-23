import { createSxComponent } from '@react-native-styled-system/core';
import { motify } from 'moti';
import type { ComponentProps } from 'react';
import { View } from 'react-native';

export const Box = createSxComponent(View)();
export type BoxProps = ComponentProps<typeof Box>;

export const MotiBox = motify(Box)();
export type MotiBoxProps = ComponentProps<typeof MotiBox>;
