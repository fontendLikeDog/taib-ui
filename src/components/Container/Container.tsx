import React, { FC } from "react";

export type PropsOfAny = {
  className: string;
  children: React.ReactNode;
};

export type ContainerProps = PropsOfAny & {
  /**
   * The size (width and height) of the square
   * It uses the range value in your tailwind.config.js file
   * i.e lg = w-2/3
   * Also accept values like 100%, 20px, 40 ...
   * 请注意，与您可能使用的过的其他框架中容器不同，Tailwind 的容器不会自动居中，也没有任何内置的水平方向的内边距。
   */
  size?: string | "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * If `true`, the content will be centered in the square
   */
  centerContent?: boolean;
  centered?: boolean;
};

const sizes = {
  xs: "max-w-xl",
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-screen-xl",
};

const Container: FC<ContainerProps> = (props) => {
  const {
    children,
    className = "",
    size = "lg",
    centerContent = false,
    centered = false,
    ...rest
  } = props;
  return <div className={className} {...rest}>
    {children}
  </div>;
};

export default Container;
