import  classnames, { cursor, opacity, TArg } from 'tailwindcss-classnames';
import {backgroundColor, borderColor, textColor} from '../../../tailwindcss-classnames';

import {ButtonProps} from './Button'

interface btnProps extends ButtonProps {
}

type Stringify<T> = {
  [K in keyof T]: T[K];
};

type btnStyleProps = Stringify<btnProps>

export const baseButton = classnames( 
  cursor('cursor-pointer')
);

export const btnDisabled = classnames(
    opacity('opacity-60'),
    cursor('cursor-not-allowed')
);

const tbui_btn_color = classnames(
  borderColor('border-transparent'),
  textColor('text-white')
)
const tbui_btn_primary = classnames(
  backgroundColor('bg-primary','hover:bg-primary-hover'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)

const tbui_btn_link = classnames(
  backgroundColor('bg-link'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_info = classnames(
  backgroundColor('bg-info'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_success = classnames(
  backgroundColor('bg-success'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_warning = classnames(
  backgroundColor('bg-warning'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_Danger = classnames(
  backgroundColor('bg-danger'),
  textColor('text-white','hover:text-white'),
  tbui_btn_color
)
const tbui_btn_white = classnames(
  backgroundColor('bg-white'),
  textColor('text-black'),
  tbui_btn_color
)
const tbui_btn_light = classnames(
  backgroundColor('bg-light'),
  textColor('text-black'),
  tbui_btn_color
)
const tbui_btn_dark = classnames(
  backgroundColor('bg-dark'),
  textColor('text-black'),
  tbui_btn_color
)
const tbui_btn_black = classnames(
  backgroundColor('bg-black'),
  textColor('text-white'),
  tbui_btn_color
)
const tbui_btn_text = classnames(
  backgroundColor('bg-transparent','hover:bg-text-hover'),
  textColor('text-black'),
  tbui_btn_color
)
const tbui_btn_ghost = classnames(
  backgroundColor('bg-transparent'),
  textColor('text-text-ghost'),
  tbui_btn_color
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
    [tbui_btn_ghost]: type === 'ghost'

  } as unknown as TArg)

}