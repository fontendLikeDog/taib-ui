import  classnames, { cursor, opacity, TArg } from 'tailwindcss-classnames';
import {backgroundColor, borderColor, textColor} from '../../../tailwindcss-classnames';

interface btnStyleProps {
  type?:
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';
  btnDisabled?: boolean;
}

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
  } as unknown as TArg)

}