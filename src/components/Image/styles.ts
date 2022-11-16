import classnames from "tailwindcss-classnames";
import { borderRadius, height } from "../../../tailwindcss-classnames";
import { ImageProps } from "./Image";

type imgStyleProps = Pick<ImageProps, "type">

const circle = classnames(
    borderRadius("rounded-full"),
);

const rounded = classnames(
    borderRadius("rounded"),
);


export const imgStyle = ({...props}:imgStyleProps) => {
    const { type } = props;
    switch (type) {
        case "circle":
            return circle;
        case "rounded":
            return rounded;
        default:
            return "";
    }
}