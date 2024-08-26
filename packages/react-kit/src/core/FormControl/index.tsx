import {
  DataHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  Ref,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
} from 'react';

import useRelocation from '../../hook/useRelocation';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import SearchSelectInput from '../SearchSelectInput';
import Select from '../Select';
import TextInput from '../TextInput';
import Textarea from '../Textarea';
import View, { ViewProps } from '../View';

import FormControlCaption, { FormControlCaptionProps } from './FormControlCaption';
import FormControlErrorMessage, { FormControlErrorMessageProps } from './FormControlErrorMessage';
import FormControlLabel, { FormControlLabelProps } from './FormControlLabel';
import FormControlSuccessMessage, { FormControlSuccessMessageProps } from './FormControlSuccessMessage';

type Props = {
  /**
   * `FormControl`의 Input 요소를 컨트롤하기 위한 ID입니다. `Label`, `Caption`과 연결짓기 위해 사용합니다.
   */
  id?: string;

  /**
   * 사용자의 입력을 허용할지에 대한 여부입니다.
   */
  disabled?: boolean;

  /**
   * 사용자의 입력을 필요로 하는지에 대한 여부입니다.
   */
  required?: boolean;

  /**
   * @default TextInput, Select, SearchSelectInput, Checkbox
   *
   * FormControl이 허용하는 Input 컴포넌트를 추가로 정의합니다.
   */
  additionalInputComponentCandidates?: any[];
} & Pick<ViewProps, 'sx'>;

type FormControlFieldProps = {
  name: string;
  label: string;
  caption?: string;
};

type FormControlContextValue = {} & Omit<Props, 'additionalInputComponentCandidates'>;
const FormControlContext = createContext<FormControlContextValue>({});

const FormControl = (
  {
    children: propChildren,
    id,
    disabled,
    required,
    additionalInputComponentCandidates = [],
    sx,
    ...props
  }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) => {
  const [relocatableComponentsObject, restComponents] = useRelocation({
    children: propChildren,
    config: {
      label: FormControlLabel,
      caption: FormControlCaption,
      errorMessage: FormControlErrorMessage,
      successMessage: FormControlSuccessMessage,
    },
  });
  const inputComponentCandidates = [
    TextInput,
    Textarea,
    Select,
    SearchSelectInput,
    Checkbox,
    Radio,
    ...additionalInputComponentCandidates,
  ];
  const InputComponent = restComponents.find((component) =>
    inputComponentCandidates.some((candidate) => isValidElement(component) && component.type === candidate),
  );
  const isHorizontalLayoutNeeded =
    isValidElement(InputComponent) && (InputComponent.type === Checkbox || InputComponent.type === Radio);

  return (
    <FormControlContext.Provider value={{ id, disabled, required }}>
      {isHorizontalLayoutNeeded ? (
        <View ref={ref} display={'flex'} sx={{ columnGap: 2, ...sx }} {...props}>
          <View display={'inline-flex'}>
            {cloneElement(InputComponent as ReactElement, { id, disabled, required })}
          </View>
          <View sx={{ '& > span': { mt: 0.5 } }}>
            {relocatableComponentsObject.label}
            {relocatableComponentsObject.caption}
            {relocatableComponentsObject.errorMessage}
            {relocatableComponentsObject.successMessage}
          </View>
        </View>
      ) : (
        <View
          ref={ref}
          display={'flex'}
          flexDirection={'column'}
          sx={{ '& > label': { mb: 1 }, '& > span': { mt: 1 }, ...sx }}
          {...props}
        >
          {relocatableComponentsObject.label}
          {cloneElement(InputComponent as ReactElement, { id, disabled, required })}
          {relocatableComponentsObject.caption}
          {relocatableComponentsObject.errorMessage}
          {relocatableComponentsObject.successMessage}
        </View>
      )}
    </FormControlContext.Provider>
  );
};

export default Object.assign(forwardRef(FormControl), {
  Label: FormControlLabel,
  Caption: FormControlCaption,
  ErrorMessage: FormControlErrorMessage,
  SuccessMessage: FormControlSuccessMessage,
});
export { FormControlContext };
export type {
  Props as FormControlProps,
  FormControlFieldProps,
  FormControlContextValue,
  FormControlCaptionProps,
  FormControlErrorMessageProps,
  FormControlLabelProps,
  FormControlSuccessMessageProps,
};
