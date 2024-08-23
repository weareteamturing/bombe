import { is } from '@mj-studio/js-util';
import SpannableBuilder from '@mj-studio/react-native-spannable-string';
import type { TextSxProps } from '@react-native-styled-system/core';
import { StyledSystemContext, propsToThemedStyle } from '@react-native-styled-system/core';
import type { ComponentType } from 'react';
import React from 'react';
import type { TextProps, TextStyle, ColorValue, StyleProp } from 'react-native';
import { StyleSheet, Text, TextInput } from 'react-native';

import { palette } from '../../theme';

import { Font } from './Font';
import { FontWeight } from './FontWeight';
import type { TextConfig, TextConfigProp } from './TextConfig';
import { DefaultTxtConfig } from './TextConfig';

// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;
class Txt {
  readonly #config: TextConfig;

  get config() {
    return this.#config;
  }

  private constructor(argConfig?: Partial<TextConfig>) {
    this.#config = { ...DefaultTxtConfig, ...argConfig };
  }

  render(text?: string, additionalConfig?: Partial<TextConfig>): React.ReactElement {
    if (additionalConfig) {
      return this.append(additionalConfig).render(text);
    }

    const { size, color, align, style, testID, italic, underline, strike, lineHeight, ellipsizeMode, sx } = this.config;

    const mergedStyle: StyleProp<TextStyle> = StyleSheet.flatten([
      style,
      {
        fontSize: size,
        includeFontPadding: false,
        color,
        fontFamily: this.fontFaimily,
        textAlign: align,
        fontStyle: italic ? 'italic' : 'normal',
        textDecorationLine: underline ? 'underline' : strike ? 'line-through' : undefined,
        lineHeight: is.number(lineHeight) ? lineHeight : size * 1.5,
      },
    ]);

    const textProps: TextProps = {
      onTextLayout: this.config.onTextLayout,
      onLayout: this.config.onLayout,
      ...this.numberOfLinesProp,
      ...(ellipsizeMode ? { ellipsizeMode } : undefined),
      allowFontScaling: false,
      style: mergedStyle,
      testID: testID,
    };

    return sx ? (
      <StyledSystemContext.Consumer key={this.config.key}>
        {(value) => (
          <Text
            {...textProps}
            style={[mergedStyle, propsToThemedStyle({ sx, theme: value?.theme, styleType: 'TextStyle' })]}
          >
            {text}
          </Text>
        )}
      </StyledSystemContext.Consumer>
    ) : (
      <Text {...textProps} key={this.config.key}>
        {text}
      </Text>
    );
  }

  append(config: TextConfigProp) {
    return new Txt({ ...this.config, ...config });
  }

  get rawTextComponent(): ComponentType<TextProps & any> {
    return (props: TextProps & any) => {
      const style: TextStyle = StyleSheet.flatten(props.style) ?? {};
      return this.render(props.children, {
        style: [this.#config.style, style],
        numberOfLines: props.numberOfLines,
        size: style?.fontSize || this.config.size,
        color: style.color || this.config.color,
        align: style?.textAlign || this.config.align,
        italic: style?.fontStyle === 'italic' || this.config.italic,
        underline: style?.textDecorationLine === 'underline' || this.config.underline,
        strike: style?.textDecorationLine === 'line-through' || this.config.strike,
      });
    };
  }

  spannableBuilder(config?: Parameters<typeof SpannableBuilder.getInstanceWithComponent>[1]): SpannableBuilder {
    return SpannableBuilder.getInstanceWithComponent(this.rawTextComponent, config);
  }

  get numberOfLinesProp() {
    if (this.config.numberOfLines <= 1) {
      return SingleLineProps;
    } else {
      return getMultiLineProps(this.config.numberOfLines);
    }
  }

  get fontFaimily() {
    if (this.config.weight === FontWeight.Bold) {
      return Font.Bold;
    } else if (this.config.weight === FontWeight.Medium) {
      return Font.Medium;
    } else {
      return Font.Regular;
    }
  }

  static render(text?: string, config?: TextConfigProp) {
    return Txt.create(config).render(text);
  }
  static create(config?: TextConfigProp) {
    return new Txt(config);
  }

  static readonly Regular = Txt.create({ weight: FontWeight.Regular });
  static readonly Medium = Txt.create({ weight: FontWeight.Medium });
  get Medium() {
    return this.append({ weight: FontWeight.Medium });
  }
  static readonly Bold = Txt.create({ weight: FontWeight.Bold });
  get Bold() {
    return this.append({ weight: FontWeight.Bold });
  }
  static readonly Color = (color?: ColorValue) => Txt.create({ color });
  Color(color?: ColorValue) {
    return this.append({ color });
  }
  Sx(sx?: TextSxProps) {
    return this.append({ sx });
  }

  static readonly H1 = Txt.Bold.append({ size: 24 });
  static readonly H2 = Txt.Bold.append({ size: 22 });
  static readonly H3 = Txt.Bold.append({ size: 20 });
  static readonly H4 = Txt.Bold.append({ size: 18 });

  static readonly L = Txt.Regular.append({ size: 18 });
  static readonly M = Txt.Regular.append({ size: 16 });
  static readonly S = Txt.Regular.append({ size: 14 });
  static readonly XS = Txt.Regular.append({ size: 12 });
  static readonly XXS = Txt.Regular.append({ size: 10 });

  // Colors
  get White() {
    return this.append({ color: palette.white });
  }
  get Red400() {
    return this.append({ color: palette.red400 });
  }
  get Red500() {
    return this.append({ color: palette.red500 });
  }

  get Gray50() {
    return this.append({ color: palette.gray50 });
  }
  get Gray100() {
    return this.append({ color: palette.gray100 });
  }
  get Gray200() {
    return this.append({ color: palette.gray200 });
  }
  get Gray300() {
    return this.append({ color: palette.gray300 });
  }
  get Gray400() {
    return this.append({ color: palette.gray400 });
  }
  get Gray500() {
    return this.append({ color: palette.gray500 });
  }
  get Gray600() {
    return this.append({ color: palette.gray600 });
  }
  get Gray700() {
    return this.append({ color: palette.gray700 });
  }
  get Gray900() {
    return this.append({ color: palette.gray900 });
  }
  get Violet300() {
    return this.append({ color: palette.violet300 });
  }
  get Violet400() {
    return this.append({ color: palette.violet400 });
  }
  get Violet500() {
    return this.append({ color: palette.violet500 });
  }
  get Green50() {
    return this.append({ color: palette.green50 });
  }
  get Green400() {
    return this.append({ color: palette.green400 });
  }
  get Green500() {
    return this.append({ color: palette.green500 });
  }
  get Blue100() {
    return this.append({ color: palette.blue100 });
  }
  get Blue200() {
    return this.append({ color: palette.blue200 });
  }
  get Blue400() {
    return this.append({ color: palette.blue400 });
  }
  get Blue500() {
    return this.append({ color: palette.blue500 });
  }

  get Center() {
    return this.append({ align: 'center' });
  }
  get SingleLine() {
    return this.append({ numberOfLines: 1 });
  }
}

type Typography =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'L'
  | 'L.Medium'
  | 'L.Bold'
  | 'M'
  | 'M.Medium'
  | 'M.Bold'
  | 'S'
  | 'S.Medium'
  | 'S.Bold'
  | 'XS'
  | 'XS.Medium'
  | 'XS.Bold';

const SingleLineProps: { ellipsizeMode: 'tail'; numberOfLines: 1 } = {
  ellipsizeMode: 'tail',
  numberOfLines: 1,
};

const getMultiLineProps = (numberOfLines: number): { ellipsizeMode: 'tail'; numberOfLines: number } => ({
  ellipsizeMode: 'tail',
  numberOfLines: numberOfLines,
});

export { Txt, type Typography };
