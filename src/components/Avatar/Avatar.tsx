import * as React from 'react';
import { myIconProps } from "../Icon/IconBase";
import { ErrorEle } from './ErrorEle';


export const STATUS = ['available', 'away', 'transfers', 'offline'] as const;

export interface AvatarProprs {
    size?: number;
    src?: string | undefined;
    AvaIcon?: React.FC<myIconProps>;
    alt?: string;
    type: 'Img' | 'Text' | 'Icon';
    status?: typeof STATUS[number];
}

const Avatar = React.forwardRef<HTMLElement,AvatarProprs>(
    ({type,src,status,AvaIcon ,...args}:AvatarProprs,ref) => {
        const [imgStatus,setImgStatus] = React.useState<boolean | undefined>(undefined);

        const img = new Image();
        type === "Img" && ( img.src = src as unknown as any);
        const imageExist = React.useCallback(() => {
            if (img.complete) {
              return true
            } else {
              img.onload = () => {
                console.log('onload--img');
                setImgStatus(true);
                return true
              }
              img.onerror = () => {
                console.log('err--img');
                setImgStatus(false);
                return false
              }
            }
        },[]);

        console.log('img status is ',imgStatus);
        React.useEffect(()=>{
         imageExist() 
        },[imgStatus])

        return (
            <figure className="relative rounded-full w-9 h-9 flex items-center justify-center m-0 p-0 border ring ring-green-500">
                {type === 'Img' && 
                  imgStatus &&
                     src && 
                       (<img src={src} className="rounded-full overflow-hidden w-full h-full object-cover ring-1 ring-white" />)
                }
                {
                    !imgStatus && type === "Img" && <ErrorEle />
                }
                {
                    type === 'Text' &&
                        <span className="text-black font-bold">B</span>
                }
                {
                    type === 'Icon' && 
                        AvaIcon &&
                            <AvaIcon />
                } 
                { status && (<span className="absolute -bottom-1 right-0 ring-1 ring-white bg-green-500 w-3 h-3 rounded-full z-50 inline-block"></span>) }
            </figure>
        )
    }
);

export default Avatar;