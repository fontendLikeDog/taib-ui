import type { TArg } from "tailwindcss-classnames"
import classnames from "../../../tailwindcss-classnames";

import { display, gridAutoColumns, gridAutoFlow, gridAutoRows, gap } from "../../../tailwindcss-classnames";
import { ColPorps } from "./Columns"


type TypeProps = Pick<ColPorps, "gaps">

const Base = classnames(
    display("grid"),
    gridAutoFlow("md:grid-flow-col","grid-flow-row"),
    gridAutoColumns("md:auto-cols-auto"),
    gridAutoRows("auto-rows-auto")
)

const Gap = (props: TypeProps) => {
    const { gaps } = props
    if (gaps) {
        return classnames(
            gap(gaps)
        )
    }
    return ""
}

export const taibStyles = ({gaps}:TypeProps) => {
    return classnames({
        [Base]:true,
        [Gap({gaps})]:true
    } as unknown as TArg )
}
