import { useLayout } from '@react-native-community/hooks';
import { Txt, is, palette, Touch } from '@teamturing/react-native-kit';
import { useEffect, useState } from 'react';

type Props = { onlyMore?: boolean; TxtComponent?: Txt; text: string; numberOfLines?: number };

const ReadMoreText = ({ onlyMore = true, TxtComponent = Txt.M, text, numberOfLines = 3 }: Props) => {
  const { width, onLayout } = useLayout();
  const [trimmedText, setTrimmedText] = useState('');
  const [renderOriginalTextComponent, setRenderOriginalTextComponent] = useState(true);
  const [showReadMore, setShowReadMore] = useState(false);
  const toggleShowReadMore = () => {
    setShowReadMore((value) => !value);
  };

  const isValidNumberOfLinesForReadMore = numberOfLines > 0;

  const canToggle = isValidNumberOfLinesForReadMore && trimmedText !== text && !(onlyMore && !showReadMore);

  useEffect(() => {
    setRenderOriginalTextComponent(true);
  }, [text, width, numberOfLines]);

  return (
    <>
      <Touch onPress={toggleShowReadMore} disabled={!canToggle} activeOpacity={1} onLayout={onLayout}>
        {TxtComponent.render(showReadMore ? trimmedText : text, {
          numberOfLines: showReadMore || is.emptyString(trimmedText) ? numberOfLines : undefined,
        })}
        {canToggle && showReadMore ? TxtComponent.render('더 보기', { color: palette.gray500 }) : null}
      </Touch>
      {renderOriginalTextComponent
        ? TxtComponent.render(text, {
            onTextLayout: (e) => {
              if (isValidNumberOfLinesForReadMore && e.nativeEvent.lines.length > numberOfLines) {
                setShowReadMore(true);
                setTrimmedText(
                  e.nativeEvent.lines
                    .slice(0, numberOfLines)
                    .map(({ text }, index) => {
                      const t = text.trimEnd();
                      return index !== numberOfLines - 1 ? t : t + '...';
                    })
                    .join('\n'),
                );
              } else {
                setShowReadMore(false);
                setTrimmedText(text);
              }
              setRenderOriginalTextComponent(false);
            },
            style: { opacity: 0, position: 'absolute', pointerEvents: 'none' },
          })
        : null}
    </>
  );
};

export { ReadMoreText };
export type { Props as ReadMoreTextProps };
