import type { SxProps } from '@react-native-styled-system/core';
import { propsToThemedStyle, StyledSystemContext } from '@react-native-styled-system/core';
import type { ReactElement } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { type ImageStyle, type DimensionValue, type ImageProps, Platform, Image } from 'react-native';
import type { ImageStyle as FastImageStyle, FastImageProps } from 'react-native-fast-image';
import FastImage from 'react-native-fast-image';

import { flatStyle, is } from '../../util';

import type { ImageConfig } from './ImageConfig';
import { DefaultImageConfig } from './ImageConfig';

export type ImgSource = ImageSourcePropType | string | undefined | null;

export class Img {
  readonly #config: ImageConfig;
  readonly #style: ImageStyle;

  get config() {
    return this.#config;
  }

  private constructor(argConfig?: Partial<ImageConfig>) {
    this.#config = { ...DefaultImageConfig, ...argConfig };
    this.#style = flatStyle(argConfig?.style);
  }

  render(source: ImgSource, additionalConfig?: Partial<ImageConfig>): ReactElement {
    if (additionalConfig) {
      return this.append(additionalConfig).render(source);
    }

    return this.shouldUseFastImage(source) ? this.renderFastImage(source) : this.renderRNImage(source);
  }

  private renderRNImage(source: Omit<ImgSource, string> | undefined | null): ReactElement {
    const props: ImageProps = {
      source: source || -1,
      resizeMode: this.resizeMode,
      testID: this.#config.testID,
    };
    if (this.#config.sx) {
      return (
        <StyledSystemContext.Consumer>
          {(value) => (
            <Image
              {...props}
              style={[
                propsToThemedStyle({
                  sx: this.#config.sx,
                  theme: value?.theme,
                }) as ImageStyle,
                this.style,
              ]}
              key={this.#config.key}
            />
          )}
        </StyledSystemContext.Consumer>
      );
    } else {
      return <Image {...props} style={this.style} key={this.#config.key} />;
    }
  }

  private renderFastImage(source: ImgSource): ReactElement {
    const props: FastImageProps = {
      source: (is.string(source) ? { uri: source, headers: this.#config.headers } : source) as any,
      resizeMode: this.resizeMode,
      testID: this.#config.testID,
      tintColor: this.#config.tintColor,
      onError: this.#config.onError,
      onLoad: this.#config.onLoad,
      onLoadEnd: this.#config.onLoadEnd,
    };

    if (this.#config.sx) {
      return (
        <StyledSystemContext.Consumer>
          {(value) => (
            <FastImage
              {...props}
              style={[
                propsToThemedStyle({
                  sx: this.#config.sx,
                  theme: value?.theme,
                }) as FastImageStyle,
                this.style,
              ]}
              key={this.#config.key}
            />
          )}
        </StyledSystemContext.Consumer>
      );
    } else {
      return <FastImage {...props} style={this.style} key={this.#config.key} />;
    }
  }

  private shouldUseFastImage(source: ImgSource): boolean {
    return is.string(source) || (Platform.OS !== 'web' && !!this.#config.useFastImageInLocalImage);
  }

  private get style(): ImageStyle & FastImageStyle {
    const result = {
      ...this.#style,
      tintColor: Platform.OS !== 'web' ? this.#config.tintColor : undefined,
    };
    if (this.width) {
      result.width = this.width;
    }
    if (this.height) {
      result.height = this.height;
    }
    delete result.resizeMode;
    return result as ImageStyle & FastImageStyle;
  }

  private get width(): DimensionValue | undefined {
    return this.#config.width || this.#style?.width || undefined;
  }
  private get height(): DimensionValue | undefined {
    return this.#config.height || this.#style?.height || undefined;
  }
  private get resizeMode(): 'contain' | 'cover' | 'stretch' | 'center' {
    let result = this.#config.resizeMode || this.#style?.resizeMode || (DefaultImageConfig.resizeMode! as any);
    if (result === 'contain' && is.android() && typeof this.borderRadius === 'number' && this.borderRadius > 0) {
      result = 'cover';
    }
    return result;
  }
  private get borderRadius() {
    return this.#style?.borderRadius || 0;
  }

  append(config: Partial<ImageConfig>) {
    return new Img({ ...this.config, ...config });
  }

  static render(source: ImgSource, config?: Partial<ImageConfig>) {
    return Img.create(config).render(source);
  }
  static create(config?: Partial<ImageConfig>) {
    return new Img(config);
  }
  static Sx(sx: SxProps) {
    return new Img({ sx });
  }
  Sx(sx?: SxProps) {
    return this.append({ sx });
  }

  static readonly S10 = Img.create({ width: 10, height: 10 });
  static readonly S12 = Img.create({ width: 12, height: 12 });
  static readonly S14 = Img.create({ width: 14, height: 14 });
  static readonly S16 = Img.create({ width: 16, height: 16 });
  static readonly S20 = Img.create({ width: 20, height: 20 });
  static readonly S24 = Img.create({ width: 24, height: 24 });
  static readonly S28 = Img.create({ width: 28, height: 28 });
  static readonly S30 = Img.create({ width: 30, height: 30 });
  static readonly S32 = Img.create({ width: 32, height: 32 });
  static readonly S36 = Img.create({ width: 36, height: 36 });
  static readonly S40 = Img.create({ width: 40, height: 40 });
  static readonly S44 = Img.create({ width: 44, height: 44 });
  static readonly S48 = Img.create({ width: 48, height: 48 });
  static readonly S56 = Img.create({ width: 56, height: 56 });
  static readonly S64 = Img.create({ width: 64, height: 64 });
  static readonly S68 = Img.create({ width: 68, height: 68 });
  static readonly S72 = Img.create({ width: 72, height: 72 });
  static readonly S80 = Img.create({ width: 80, height: 80 });
  static readonly S88 = Img.create({ width: 88, height: 88 });
  static readonly S96 = Img.create({ width: 96, height: 96 });
  static readonly S100 = Img.create({ width: 100, height: 100 });
  static readonly S120 = Img.create({ width: 120, height: 120 });
  static readonly S140 = Img.create({ width: 140, height: 140 });
}
