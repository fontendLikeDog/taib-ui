import React from "react";

// @ts-ignore
import TestStyles from './Test.module.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    primary?: boolean;
    label?: string;
}

export const Test: React.FC<ButtonProps> = ({
    children,
    label,
    ...props
  }) => {
   
    const classNames = TestStyles;
    console.log(classNames);
    return (
      <button className={classNames.btn} {...props}>
        {children || label}
      </button>
    );
  };