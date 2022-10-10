import  classnames, { cursor, opacity, TArg, typography } from 'tailwindcss-classnames';
import {backgroundColor, borderColor, textColor} from '../../../tailwindcss-classnames';

import {ButtonProps} from './Button'

// type btnStyleProps = Pick<ButtonProps, "type">
// type btnStyleProps2 = ButtonProps['type']

type myPick<T,K extends keyof T> = {
  [P in K]: T[P]
}

type btnStyleProps = myPick<ButtonProps, "type" | "btnDisabled">

export const baseButton = classnames( 
  cursor('cursor-pointer')
);

export const btnDisabled = classnames(
    opacity('opacity-60'),
    cursor('cursor-not-allowed')
);

const tbui_btn_color = classnames(
  borderColor('border-transparent','hover:border-transparent'),
  textColor('text-white')
)
const tbui_btn_primary = classnames(
  backgroundColor('bg-primary','hover:bg-primary-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)

const tbui_btn_link = classnames(
  backgroundColor('bg-link','hover:bg-link-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_info = classnames(
  backgroundColor('bg-info','hover:bg-info-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_success = classnames(
  backgroundColor('bg-success','hover:bg-success-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_warning = classnames(
  backgroundColor('bg-warning','hover:bg-warning-hover'),
  textColor('text-black','hover:text-black'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_Danger = classnames(
  backgroundColor('bg-danger','hover:bg-danger-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_white = classnames(
  backgroundColor('bg-white','hover:bg-white-hover'),
  textColor('text-black'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_light = classnames(
  backgroundColor('bg-light','hover:bg-light-hover'),
  textColor('text-black-ter'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_dark = classnames(
  backgroundColor('bg-dark','hover:bg-dark-hover'),
  textColor('text-white','hover:text-white'),
)
const tbui_btn_black = classnames(
  backgroundColor('bg-black','hover:bg-black-hover'),
  textColor('text-white','hover:text-white'),
)
const tbui_btn_text = classnames(
  backgroundColor('bg-transparent','hover:bg-text-hover'),
  textColor('text-black'),
  borderColor('border-transparent','hover:border-transparent'),
  typography('underline')
)
const tbui_btn_ghost = classnames(
  backgroundColor('bg-transparent'),
  textColor('text-text-ghost','hover:text-text-ghost'),
  borderColor('border-transparent','hover:border-transparent'),
  typography('hover:underline')
)
// light color btn
const tbui_btn_primary_light = classnames(
  backgroundColor('bg-primary-light','hover:bg-primary-50'),
  textColor('text-primary-700','hover:text-primary-700'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_link_light = classnames(
  backgroundColor('bg-link-light','hover:bg-link-50'),
  textColor('text-link-700','hover:text-link-700'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_info_light = classnames(
  backgroundColor('bg-info-light','hover:bg-info-50'),
  textColor('text-info','hover:text-info'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_success_light = classnames(
  backgroundColor('bg-success-light','hover:bg-success-50'),
  textColor('text-success','hover:text-success'),
  borderColor('border-transparent','hover:border-transparent'),
)



export const disableButton = (disabled: boolean) =>
  classnames({
    [btnDisabled]: disabled,
    [baseButton]: !disabled,
  } as unknown as TArg)

export const btnStyle = ({...args}:btnStyleProps) => {
  const {type} = args;
  return classnames({
    [tbui_btn_primary]: type === 'primary',
    [tbui_btn_link]: type === 'link',
    [btnDisabled]: args.btnDisabled,
    [tbui_btn_info]: type === 'info',
    [tbui_btn_success]: type === 'success',
    [tbui_btn_warning]: type === 'warning',
    [tbui_btn_Danger]: type === 'danger',
    [tbui_btn_white]: type === 'white',
    [tbui_btn_light]: type === 'light',
    [tbui_btn_dark]: type === 'dark',
    [tbui_btn_black]: type === 'black',
    [tbui_btn_text]: type === 'text',
    [tbui_btn_ghost]: type === 'ghost',
    [tbui_btn_primary_light]: type === 'primary-light',
    [tbui_btn_link_light]: type === 'link-light',
    [tbui_btn_info_light]: type === 'info-light', 
    [tbui_btn_success_light]: type === 'success-light', 

  } as unknown as TArg)

}