import classnames, { display, flexDirection, gap, TArg } from "../../../tailwindcss-classnames";
import { StackProps } from "./Stack";

type TypeProps = Pick<StackProps, "gaps" | "col" | "row" | "revcol" | "revrow">

const Base = classnames(
    display("flex"),
);


const Gap = (props: TypeProps) => {
    const { gaps } = props
    if (gaps) {
        return classnames(
            gap(gaps)
        )
    }
    return "gap-4"
}

const FlexDirection = (props: TypeProps) => {
    const { col, row, revcol, revrow } = props
    if (col) {
        return classnames(
            flexDirection("flex-col")
        )
    }
    if (row) {
        return classnames(
            flexDirection("flex-row")
        )
    }
    if (revcol) {
        return classnames(
            flexDirection("flex-col-reverse")
        )
    }
    if (revrow) {
        return classnames(
            flexDirection("flex-row-reverse")
        )
    }
    return "flex-col"
}

export const stackStyles = ({gaps,col,row,revcol,revrow}:TypeProps) => {
    return classnames({
        [Base]:true,
        [Gap({gaps})]:true,
        [FlexDirection({col,row,revcol,revrow})]:true
    } as unknown as TArg )
}