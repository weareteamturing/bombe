import { PropsWithChildren, ReactElement, Ref, cloneElement, createContext, forwardRef, isValidElement } from 'react';

import useRelocation from '../../hook/useRelocation';
import { SxProp } from '../../utils/styled-system';
import CheckboxGroup from '../CheckboxGroup';
import RadioGroup from '../RadioGroup';
import View from '../View';

import CheckboxOrRadioGroupFormControlCaption, {
  CheckboxOrRadioGroupFormControlCaptionProps,
} from './CheckboxOrRadioGroupFormControlCaption';
import CheckboxOrRadioGroupFormControlErrorMessage, {
  CheckboxOrRadioGroupFormControlErrorMessageProps,
} from './CheckboxOrRadioGroupFormControlErrorMessage';
import CheckboxOrRadioGroupFormControlLabel, {
  CheckboxOrRadioGroupFormControlLabelProps,
} from './CheckboxOrRadioGroupFormControlLabel';
import CheckboxOrRadioGroupFormControlSuccessMessage, {
  CheckboxOrRadioGroupFormControlSuccessMessageProps,
} from './CheckboxOrRadioGroupFormControlSuccessMessage';
import CheckboxOrRadioGroupFormControlTooltipIcon, {
  CheckboxOrRadioGroupFormControlTooltipIconProps,
} from './CheckboxOrRadioGroupFormControlTooltipIcon';

type Props = {
  /**
   * `CheckboxOrRadioGroupFormControl`의 ID입니다. `Label`, `Caption`과 연결짓기 위해 사용합니다.
   */
  id?: string;

  /**
   * 사용자의 입력을 허용할지에 대한 여부입니다.
   */
  disabled?: boolean;

  /**
   * 사용자의 입력을 필요로 하는지에 대한 여부입니다.
   * @default true
   */
  required?: boolean;
} & SxProp;

type CheckboxOrRadioGroupFormControlFieldProps = {
  name: string;
  label: string;
  caption?: string;
};

type CheckboxOrRadioGroupFormControlContextValue = {} & Props;
const CheckboxOrRadioGroupFormControlContext = createContext<CheckboxOrRadioGroupFormControlContextValue>({});

/**
 * RadioGroup 및 CheckboxGroup을 위한 FormControl
 * bombe의 FormControl과 동일한 구조이지만, 그룹 컴포넌트에 특화되어 있습니다.
 *
 * @example
 * ```tsx
 * <CheckboxOrRadioGroupFormControl id="choice" required>
 *   <CheckboxOrRadioGroupFormControl.Label>Choose one</CheckboxOrRadioGroupFormControl.Label>
 *   <CheckboxOrRadioGroupFormControl.TooltipIcon text="Help text" />
 *   <CheckboxOrRadioGroupFormControl.Caption>Select your preference</CheckboxOrRadioGroupFormControl.Caption>
 *
 *   <RadioGroup name="choice" value={value} onChange={onChange}>
 *     <RadioGroup.Option value="a" label="Option A" />
 *     <RadioGroup.Option value="b" label="Option B" />
 *   </RadioGroup>
 *
 *   <CheckboxOrRadioGroupFormControl.ErrorMessage>Error message</CheckboxOrRadioGroupFormControl.ErrorMessage>
 * </CheckboxOrRadioGroupFormControl>
 * ```
 */
const CheckboxOrRadioGroupFormControl = (
  { children: propChildren, id, disabled, required = true, sx, ...props }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const [relocatableComponentsObject, restComponents] = useRelocation({
    children: propChildren,
    config: {
      label: CheckboxOrRadioGroupFormControlLabel,
      caption: CheckboxOrRadioGroupFormControlCaption,
      errorMessage: CheckboxOrRadioGroupFormControlErrorMessage,
      successMessage: CheckboxOrRadioGroupFormControlSuccessMessage,
      tooltipIcon: CheckboxOrRadioGroupFormControlTooltipIcon,
    },
  });

  const groupInputComponentCandidates = [RadioGroup, CheckboxGroup];

  const GroupInputComponent = restComponents.find((component) =>
    groupInputComponentCandidates.some((candidate) => isValidElement(component) && component.type === candidate),
  );

  return (
    <CheckboxOrRadioGroupFormControlContext.Provider value={{ id, disabled, required }}>
      <View
        ref={ref}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          '& .checkbox_or_radio_group_form_control__label_wrapper': {
            mb: relocatableComponentsObject.label?.props.visuallyHidden
              ? 0
              : relocatableComponentsObject.caption
              ? 0.5
              : 3,
          },
          '& > span': { mb: 3 },
          ...sx,
        }}
        {...props}
      >
        <View
          className={'checkbox_or_radio_group_form_control__label_wrapper'}
          display={'flex'}
          alignItems={'center'}
          sx={{ columnGap: 1 }}
        >
          {relocatableComponentsObject.label}
          {relocatableComponentsObject.tooltipIcon}
        </View>
        {relocatableComponentsObject.caption}
        {relocatableComponentsObject.errorMessage}
        {relocatableComponentsObject.successMessage}
        {cloneElement(GroupInputComponent as ReactElement, { id, disabled })}
      </View>
    </CheckboxOrRadioGroupFormControlContext.Provider>
  );
};

export default Object.assign(forwardRef(CheckboxOrRadioGroupFormControl), {
  Label: CheckboxOrRadioGroupFormControlLabel,
  Caption: CheckboxOrRadioGroupFormControlCaption,
  ErrorMessage: CheckboxOrRadioGroupFormControlErrorMessage,
  SuccessMessage: CheckboxOrRadioGroupFormControlSuccessMessage,
  TooltipIcon: CheckboxOrRadioGroupFormControlTooltipIcon,
});
export { CheckboxOrRadioGroupFormControlContext };
export type {
  Props as CheckboxOrRadioGroupFormControlProps,
  CheckboxOrRadioGroupFormControlFieldProps,
  CheckboxOrRadioGroupFormControlContextValue,
  CheckboxOrRadioGroupFormControlCaptionProps,
  CheckboxOrRadioGroupFormControlErrorMessageProps,
  CheckboxOrRadioGroupFormControlLabelProps,
  CheckboxOrRadioGroupFormControlSuccessMessageProps,
  CheckboxOrRadioGroupFormControlTooltipIconProps,
};
