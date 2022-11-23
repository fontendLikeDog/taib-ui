import React from "react";

// @ts-ignore
import TypographyStyles from "./Typography.module.css";

import Title from "./Title";
import Text from "./Text";
import Link from "./Link";

const Typography = ({ children, className, tag = "div", style }: any) => {
  let classes = [
    TypographyStyles["taibui-typography"],
    TypographyStyles["taibui-typography-container"],
  ];
  if (className) {
    classes.push(className);
  }
  let CustomTag: any = `${tag}`;
  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  );
};

Typography.Title = Title;
Typography.Text = Text;
Typography.Link = Link;

export default Typography;
