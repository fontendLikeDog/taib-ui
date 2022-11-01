import * as React from 'react';
import { myIconProps } from "../Icon/IconBase";

export interface AvatarProprs {
    size: number;
    src?: string;
    icon?: React.FC<myIconProps>;
    alt?: string;
    isImg?: boolean;
    isText?: boolean;
    isIcon?: boolean;
    isStatus?: boolean;
}

const Avatar = React.forwardRef<HTMLElement,AvatarProprs>(
    ({isImg,src,isStatus, ...args}:AvatarProprs,ref) => {
        return (
            <figure className="relative rounded-full w-9 h-9 inline-block m-0 p-0 border ring ring-green-500">
                {isImg && (<img src={src} className="rounded-full overflow-hidden w-full h-full object-cover ring-1 ring-white" />)}
                { isStatus && (<span className="absolute -bottom-1 right-0 ring-1 ring-white bg-green-500 w-3 h-3 rounded-full z-50 inline-block"></span>) }
            </figure>
        )
    }
);

export default Avatar;