import { Txt, type Typography, type TextConfigProp, type TxtEllipsizeMode } from '@teamturing/react-native-kit';
import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

import type { LayoutStyle } from './Layout/LayoutStyle';

const numberWidthByTypography: Record<Typography, number> = {
  'H1': 16,
  'H2': 15,
  'H3': 14,
  'L': 12,
  'L.Medium': 12,
  'L.Bold': 12,
  'M': 10,
  'M.Medium': 11,
  'M.Bold': 11,
  'S': 9,
  'S.Medium': 9,
  'S.Bold': 10,
  'XS': 7,
  'XS.Medium': 7,
  'XS.Bold': 7,
};

const commaWidthByTypography: Record<Typography, number> = {
  'H1': 16 / 4,
  'H2': 15 / 4,
  'H3': 14 / 4,
  'L': 12 / 4,
  'L.Medium': 12 / 4,
  'L.Bold': 12 / 4,
  'M': 10 / 4,
  'M.Medium': 11 / 4,
  'M.Bold': 11 / 4,
  'S': 9 / 4,
  'S.Medium': 9 / 4,
  'S.Bold': 10 / 4,
  'XS': 7 / 4,
  'XS.Medium': 7 / 4,
  'XS.Bold': 7 / 4,
};

const numberHeightByTypography: Record<Typography, number> = {
  'H1': 36,
  'H2': 33,
  'H3': 30,
  'L': 27,
  'L.Medium': 27,
  'L.Bold': 27,
  'M': 24,
  'M.Medium': 24,
  'M.Bold': 24,
  'S': 21,
  'S.Medium': 21,
  'S.Bold': 21,
  'XS': 18,
  'XS.Medium': 18,
  'XS.Bold': 18,
};

const TxtComponentByTypography: Record<Typography, Txt> = {
  'H1': Txt.H1,
  'H2': Txt.H2,
  'H3': Txt.H3,
  'L': Txt.L,
  'L.Medium': Txt.L.Medium,
  'L.Bold': Txt.L.Bold,
  'M': Txt.M,
  'M.Medium': Txt.M.Medium,
  'M.Bold': Txt.M.Bold,
  'S': Txt.S,
  'S.Medium': Txt.S.Medium,
  'S.Bold': Txt.S.Bold,
  'XS': Txt.XS,
  'XS.Medium': Txt.XS.Medium,
  'XS.Bold': Txt.XS.Bold,
};

type Props = {
  value: number;
  fromValue: number;
  txt?: Typography;
  txtConfig?: TextConfigProp;
  duration?: number;
  delay?: number;
  suffix?: string;
  withComma?: boolean;
  layout?: LayoutStyle;
};

const AnimatedNumber = ({
  value,
  fromValue,
  txt = 'M.Medium',
  txtConfig,
  duration = 3000,
  delay = 0,
  suffix = '',
  withComma = false,
  layout,
}: Props) => {
  const numberWidth = numberWidthByTypography[txt];
  const commaWidth = commaWidthByTypography[txt];

  const isIncreasing = value - fromValue > 0;

  const numberWithCommaRegex = /\B(?=(\d{3})+(?!\d))/g;
  const fromValueString = fromValue.toString().replace(numberWithCommaRegex, withComma ? ',' : '');
  const valueString = value.toString().replace(numberWithCommaRegex, withComma ? ',' : '');
  const digitDifference = Math.abs(valueString.length - fromValueString.length);
  const maxDigit = Math.max(fromValueString.length, valueString.length);

  const fromValueArray = Array.from(fromValueString.padStart(maxDigit, '0'));
  const valueArray = Array.from(valueString.padStart(maxDigit, '0'));

  const minimumDigitIndexToAnimated = fromValueArray.findIndex((fromNumber, i) => fromNumber !== valueArray[i]);

  const diffCommaCount = Array.from((isIncreasing ? valueString : fromValueString).slice(0, digitDifference)).filter(
    (c) => c === ',',
  ).length;
  const diffNumberCount = digitDifference - diffCommaCount;

  const delta = diffCommaCount * commaWidth + diffNumberCount * numberWidth;
  const fromX = isIncreasing ? -delta : 0;
  const toX = isIncreasing ? 0 : -delta;

  const translateX = useRef(new Animated.Value(fromX)).current;
  useEffect(() => {
    const animation = Animated.timing(translateX, {
      useNativeDriver: true,
      toValue: toX,
      easing: Easing.out(Easing.exp),
      duration,
      delay,
    });
    animation.start();

    return animation.stop;
  }, [delay, duration, toX, translateX]);

  return (
    <Animated.View
      style={[
        { overflow: 'hidden' },
        {
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
                outputRange: [Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER],
              }),
            },
          ],
        },
        layout,
      ]}
    >
      <Animated.View style={{ flexDirection: 'row', alignItems: 'center', transform: [{ translateX }] }}>
        {Array(maxDigit)
          .fill(0)
          .map((_, i) => {
            const animationDeleyPerDigit = duration / maxDigit / 10;
            const commonProps = {
              txt,
              txtConfig: {
                ellipsizeMode: 'clip' as TxtEllipsizeMode,
                ...txtConfig,
              },
            };

            return (
              <View key={maxDigit - i}>
                {fromValueArray[i] === ',' || valueArray[i] === ',' ? (
                  <View>
                    <CommaUnit {...commonProps} />
                  </View>
                ) : i < minimumDigitIndexToAnimated ? (
                  <View>
                    <NumberUnit {...commonProps} value={Number(valueArray[i])} />
                  </View>
                ) : (
                  <View>
                    <AnimatedNumberUnit
                      {...commonProps}
                      value={Number(valueArray[i])}
                      fromValue={Number(fromValueArray[i])}
                      isIncreasing={isIncreasing}
                      duration={duration}
                      delay={
                        delay +
                        (isIncreasing ? (maxDigit - 1 - i) * animationDeleyPerDigit : i * animationDeleyPerDigit)
                      }
                      isLowDigit={i !== minimumDigitIndexToAnimated}
                    />
                  </View>
                )}
              </View>
            );
          })}
        {suffix ? TxtComponentByTypography[txt].render(suffix, txtConfig) : null}
      </Animated.View>
    </Animated.View>
  );
};

type CommaUnitProps = {
  txt: Typography;
  txtConfig?: TextConfigProp;
};

const CommaUnit = ({ txt, txtConfig }: CommaUnitProps) => {
  const commaWidth = commaWidthByTypography[txt];

  return <View style={{ width: commaWidth }}>{TxtComponentByTypography[txt].render(',', { ...txtConfig })}</View>;
};

type NumberUnitProps = {
  value: number;
  txt: Typography;
  txtConfig?: TextConfigProp;
};

const NumberUnit = ({ value, txt, txtConfig }: NumberUnitProps) => {
  const numberWidth = numberWidthByTypography[txt];
  const numberHeight = numberHeightByTypography[txt];

  return (
    <View style={{ width: numberWidth, height: numberHeight }}>
      {TxtComponentByTypography[txt].render(`${value}`, txtConfig)}
    </View>
  );
};

type AnimatedNumberUnitProps = {
  fromValue: number;
  isIncreasing: boolean;
  duration: number;
  delay: number;
  isLowDigit?: boolean;
} & NumberUnitProps;

const AnimatedNumberUnit = ({
  value,
  fromValue,
  isIncreasing,
  txt,
  txtConfig,
  duration,
  delay,
  isLowDigit = false,
}: AnimatedNumberUnitProps) => {
  const numberWidth = numberWidthByTypography[txt];
  const numberHeight = numberHeightByTypography[txt];

  const valueDifference =
    (isIncreasing && value - fromValue > 0
      ? value - fromValue
      : isIncreasing && value - fromValue <= 0
      ? value + 10 - fromValue
      : !isIncreasing && value - fromValue >= 0
      ? fromValue + 10 - value
      : !isIncreasing && value - fromValue < 0
      ? fromValue - value
      : 0) + (isLowDigit ? 10 : 0);

  const numbers = Array(valueDifference + 1)
    .fill(isIncreasing ? fromValue : value)
    .map((number, i) => (number + i) % 10);

  const delta = numberHeight * valueDifference;
  const fromY = isIncreasing ? -delta : 0;
  const toY = isIncreasing ? 0 : -delta;

  const translateY = useRef(new Animated.Value(fromY)).current;
  useEffect(() => {
    const animation = Animated.timing(translateY, {
      useNativeDriver: true,
      toValue: toY,
      easing: Easing.out(Easing.cubic),
      duration,
      delay,
    });
    animation.start();

    return animation.stop;
  }, [delay, duration, toY, translateY]);

  return (
    <View style={{ width: numberWidth, height: numberHeight, overflow: 'hidden' }}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {[...numbers]
          .reverse()
          .map((number, i) =>
            TxtComponentByTypography[txt].render(`${number}`, { key: i, align: 'center', ...txtConfig }),
          )}
      </Animated.View>
    </View>
  );
};

export { AnimatedNumber };
export type { Props as AnimatedNumberProps };
