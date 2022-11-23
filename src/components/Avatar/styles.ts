import classnames, { alignItems, backgroundColor , borderRadius, borders, display, height, justifyContent, margin, padding, position, width } from "../../../tailwindcss-classnames";

import type { TArg } from "../../../tailwindcss-classnames";
import type { AvatarProprs } from "./Avatar";

type StyleProps = Pick<AvatarProprs, "variant" | "type" | "status">;

const basic = classnames(
    position("relative"),
    width("w-9"),
    height("h-9"),
    display("flex"),
    alignItems("items-center"),
    justifyContent("justify-center"),
    backgroundColor("bg-gray-50"),
    margin("m-0"),
    padding("p-0"),
    borders("ring","ring-primary")
);

const circle = classnames(
    basic,
    borderRadius("rounded-full"),
);

const rounded = classnames(
    basic,
    borderRadius("rounded-md"),
)

const square = classnames(
    basic,
    borderRadius("rounded-none"),
)

const statusBasic = classnames(
    position("absolute"),
    borders("ring-2", "ring-white"),
    backgroundColor("bg-green-500"),
    width("w-3"),
    height("h-3"),
    borderRadius("rounded-full"),
)


export const AvatarStyles = ({variant, type}:StyleProps) => {
    return classnames({
        [circle]: variant === "circle",
        [rounded]: variant === "rounded",
        [square]: variant === "square",
    } as unknown as TArg )
}

export const StatusStyles = ({variant}:any) => {
    return classnames({
        [statusBasic]: true
    } as unknown as TArg )
}

// export const ImgStyles = ({variant, type}:StyleProps)=> {
//     return classnames({

//     })
// }