import  classnames, { cursor, fontSize, justifyContent, opacity, TArg, typography } from 'tailwindcss-classnames';
import {backgroundColor, borderColor, textColor, padding, height} from '../../../tailwindcss-classnames';

import {ButtonProps} from './Button'

// type btnStyleProps = Pick<ButtonProps, "type">
// type btnStyleProps2 = ButtonProps['type']

type myPick<T,K extends keyof T> = {
  [P in K]: T[P]
}

type btnStyleProps = myPick<ButtonProps, "type" | "btnDisabled" | "sizes">

export const baseButton = classnames( 
  cursor('cursor-pointer'),
  justifyContent('justify-center'),
  typography('text-center','whitespace-nowrap')
);

export const btnDisabled = classnames(
    baseButton,
    opacity('opacity-60'),
    cursor('cursor-not-allowed')
);

const tbui_btn_color = classnames(
  baseButton,
  borderColor('border-transparent','hover:border-transparent'),
  textColor('text-white')
)
const tbui_btn_primary = classnames(
  backgroundColor('bg-primary','hover:bg-primary-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color,
  baseButton,
)

const tbui_btn_link = classnames(
  baseButton,
  backgroundColor('bg-link','hover:bg-link-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_info = classnames(
  baseButton,
  backgroundColor('bg-info','hover:bg-info-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_success = classnames(
  baseButton,
  backgroundColor('bg-success','hover:bg-success-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_warning = classnames(
  baseButton,
  backgroundColor('bg-warning','hover:bg-warning-hover'),
  textColor('text-black','hover:text-black'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_Danger = classnames(
  baseButton,
  backgroundColor('bg-danger','hover:bg-danger-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_white = classnames(
  baseButton,
  backgroundColor('bg-white','hover:bg-white-hover'),
  textColor('text-black'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_light = classnames(
  baseButton,
  backgroundColor('bg-light','hover:bg-light-hover'),
  textColor('text-black-ter'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_dark = classnames(
  baseButton,
  backgroundColor('bg-dark','hover:bg-dark-hover'),
  textColor('text-white','hover:text-white'),
)
const tbui_btn_black = classnames(
  baseButton,
  backgroundColor('bg-black','hover:bg-black-hover'),
  textColor('text-white','hover:text-white'),
)
const tbui_btn_text = classnames(
  baseButton,
  backgroundColor('bg-transparent','hover:bg-text-hover'),
  textColor('text-black'),
  borderColor('border-transparent','hover:border-transparent'),
  typography('underline')
)
const tbui_btn_ghost = classnames(
  baseButton,
  backgroundColor('bg-transparent'),
  textColor('text-text-ghost','hover:text-text-ghost'),
  borderColor('border-transparent','hover:border-transparent'),
  typography('hover:underline')
)
// light color btn
const tbui_btn_primary_light = classnames(
  baseButton,
  backgroundColor('bg-primary-light','hover:bg-primary-50'),
  textColor('text-primary-700','hover:text-primary-700'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_link_light = classnames(
  baseButton,
  backgroundColor('bg-link-light','hover:bg-link-50'),
  textColor('text-link-700','hover:text-link-700'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_info_light = classnames(
  baseButton,
  backgroundColor('bg-info-light','hover:bg-info-50'),
  textColor('text-info-dark','hover:text-info-dark'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_success_light = classnames(
  baseButton,
  backgroundColor('bg-success-light','hover:bg-success-50'),
  textColor('text-success-dark','hover:text-success-dark'),
  borderColor('border-transparent','hover:border-transparent'),
)
const tbui_btn_warning_light = classnames(
  baseButton,
  backgroundColor('bg-warning-light','hover:bg-warning-50'),
  borderColor('border-transparent','hover:border-transparent'),
  textColor('text-warning-dark','hover:text-warning-dark')
)
const tbui_btn_danger_light = classnames(
  baseButton,
  backgroundColor('bg-danger-light','hover:bg-danger-50'),
  borderColor('border-transparent','hover:border-transparent'),
  textColor('text-danger','hover:text-danger')
)
//btn sizes
const tbui_btn_small = classnames(
  padding('px-2.5','py-1.5'),
  fontSize('text-xs'),
  height('h-8'),
)
const tbui_btn_normal = classnames(
    padding('px-4','py-1.7'),
    fontSize('text-sm'),
    height('h-10'),
)
const tbui_btn_medium = classnames(
  padding('px-5','py-2'),
  fontSize('text-base'),
  height('h-12')
)
const tbui_btn_large = classnames(
  padding('px-6','py-3'),
  fontSize('text-lg'),
  height('h-15')
)

export const btnStyle = ({...args}:btnStyleProps) => {
  const { type, sizes } = args;
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
    [tbui_btn_warning_light]: type === 'warning-light',
    [tbui_btn_danger_light]: type === 'danger-light',
    [tbui_btn_small]: sizes === 'small',
    [tbui_btn_normal]: sizes === 'normal',
    [tbui_btn_medium]: sizes === 'medium',
    [tbui_btn_large]: sizes === 'large',

  } as unknown as TArg)

}