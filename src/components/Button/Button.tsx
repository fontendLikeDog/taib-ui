import React from "react";
import * as styles from './styles';

// @ts-ignore
import ButtonStyles from './Button.module.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    buttonText: string;
    type?: 
      | 'primary'
      | 'link'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger';
    btnDisabled: boolean;
    style?: React.CSSProperties
    as?: keyof JSX.IntrinsicElements;
}

interface CustomButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}


export const Button: React.FC<ButtonProps> = ({
    children,
    buttonText,
    btnDisabled = false,
    as,
    type,
    style,
    ...props
  }:ButtonProps) => {
   
    const classNames = ButtonStyles;

    //with custom Tag
    const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
      const Tag = as as keyof JSX.IntrinsicElements
      return <Tag {...props} />
    }
    
    const RenderButton = ({children}:any) => (
      as ? (
        <CustomButton className={classNames.btn+ ' ' + styles.btnStyle({type,btnDisabled})} {...props}>
            {children || buttonText}
        </CustomButton>
      ) : (
        <button className={classNames.btn+ ' ' + styles.btnStyle({type,btnDisabled})} {...props}>
            {children || buttonText}
        </button>
      )
    )

    return (
      <>
          <RenderButton>
            {children || buttonText}
          </RenderButton>
      </>
    );
  };