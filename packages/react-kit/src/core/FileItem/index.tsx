import { DocumentIcon, ExclamationPointInCircleIcon, PictureIcon, VideoIcon } from '@teamturing/icons';
import { forcePixelValue } from '@teamturing/utils';
import { HTMLProps, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BetterSystemStyleObject, sx, SxProp } from '../../utils/styled-system';
import Spinner from '../Spinner';
import StyledIcon from '../StyledIcon';

type Props = {
  file: File | Blob;
  variant?: 'default' | 'thumbnail';
  /**
   * 비활성화 상태를 정의합니다.
   */
  disabled?: boolean;
  /**
   * 로딩 상태를 정의합니다.
   */
  loading?: boolean;
  /**
   *
   */
  validationStatus?: 'error' | undefined;
  /**
   * 시각적인 후행 부분에 상호작용할 요소를 정의합니다.
   */
  trailingAction?: React.ReactElement<HTMLProps<HTMLButtonElement>>;
} & SxProp;

const FileItem = ({
  file,
  variant = 'default',
  disabled,
  loading,
  validationStatus,
  trailingAction,
  ...props
}: Props) => {
  const fileType = file.type.match('image/*') ? 'image' : file.type.match('video/*') ? 'video' : 'whatever';
  const fileName = 'name' in file ? file.name : '';
  const FileIcon = fileType === 'image' ? PictureIcon : fileType === 'video' ? VideoIcon : DocumentIcon;

  const [objectUrl, setObjectUrl] = useState('');
  useEffect(() => {
    setObjectUrl(URL.createObjectURL(file));
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <BaseFile
      variant={variant}
      disabled={disabled}
      loading={disabled}
      validationStatus={validationStatus}
      trailingAction={trailingAction}
      {...props}
    >
      {variant === 'default' ? (
        <>
          <FileIcon />
          <span>{fileName}</span>
          {validationStatus === 'error' ? (
            <StyledIcon icon={ExclamationPointInCircleIcon} size={24} color={'icon/danger'} />
          ) : loading ? (
            <Spinner width={24} height={24} />
          ) : null}
          {trailingAction}
        </>
      ) : variant === 'thumbnail' ? (
        <>
          {fileType === 'image' ? (
            <img src={objectUrl} />
          ) : fileType === 'video' ? (
            <div className={'file__thumbnail__video'}>
              <video src={objectUrl} />
              <VideoIcon />
            </div>
          ) : (
            <div className={'file__thumbnail__whatever'}>
              <DocumentIcon />
            </div>
          )}
          {validationStatus === 'error' || loading ? (
            <div className={'file__thumbnail__cover'}>
              {validationStatus === 'error' ? (
                <StyledIcon icon={ExclamationPointInCircleIcon} size={24} color={'icon/danger'} />
              ) : loading ? (
                <Spinner width={24} height={24} />
              ) : null}
            </div>
          ) : null}
          {trailingAction}
        </>
      ) : null}
    </BaseFile>
  );
};

const BaseFile = styled.div<Omit<Props, 'file'>>(
  { position: 'relative' },
  ({ theme, disabled }) =>
    variant<BetterSystemStyleObject>({
      prop: 'variant',
      variants: {
        default: {
          'backgroundColor': theme.colors['bg/neutral'],
          'borderRadius': theme.radii.xs,
          'width': '100%',
          'height': forcePixelValue(48),
          'py': 1,
          'pr': 2,
          'pl': 4,

          'display': 'flex',
          'columnGap': 2,
          'alignItems': 'center',

          '& > svg': {
            width: 24,
            height: 24,
            color: theme.colors['icon/neutral/bold'],
          },
          '& > span': {
            flex: 1,
            fontSize: theme.fontSizes.xs,
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[2],
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: theme.colors['text/neutral/subtle'],
          },

          ...(disabled
            ? {
                '& > svg': {
                  color: theme.colors['icon/disabled'],
                },
                '& span': {
                  color: theme.colors['text/disabled'],
                },
              }
            : {}),
        },
        thumbnail: {
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',

          'width': forcePixelValue(160),
          'maxWidth': forcePixelValue(160),
          'aspectRatio': '16 / 9',

          'backgroundColor': theme.colors['bg/neutral'],
          'overflow': 'hidden',
          'borderRadius': 'xs',

          '&:after': {
            content: '""',
            position: 'absolute',
            top: forcePixelValue(0),
            right: forcePixelValue(0),
            bottom: forcePixelValue(0),
            left: forcePixelValue(0),
            borderWidth: 1,
            borderColor: theme.colors['border/neutral'],
            borderStyle: 'solid',
            borderRadius: 'xs',
            pointerEvents: 'none',
          },

          '& > .file__thumbnail__cover': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            backgroundColor: 'bg/neutral',
          },

          '& > img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
          '& > .file__thumbnail__video': {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            svg: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 24,
              height: 24,
              color: 'icon/primary',
            },
            video: {
              width: '100%',
            },
          },
          '& > .file__thumbnail__whatever': {
            width: '100%',
            height: '100%',
            backgroundColor: 'bg/neutral',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            svg: {
              width: 24,
              height: 24,
              color: 'icon/neutral/bold',
            },
          },

          '& > button': {
            position: 'absolute',
            top: 0,
            right: 0,
          },

          ...(disabled ? {} : {}),
        },
      },
    }),
  ({ theme, variant: propVariant }) =>
    variant<BetterSystemStyleObject>({
      prop: 'validationStatus',
      variants: {
        error: {
          ...(propVariant === 'thumbnail'
            ? {
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  top: forcePixelValue(0),
                  right: forcePixelValue(0),
                  bottom: forcePixelValue(0),
                  left: forcePixelValue(0),
                  borderWidth: 2,
                  borderColor: theme.colors['border/danger'],
                  borderStyle: 'solid',
                  borderRadius: 'xs',
                  pointerEvents: 'none',
                },
              }
            : {}),
        },
      },
    }),
  sx,
);

export default memo(FileItem);
export type { Props as FileItemProps };
