import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'



type MyPick<T, K extends keyof T> = { [key in K]:T[key] }

export type IconBaseProps = MyPick<FontAwesomeIconProps, 'className' | 'spin' | 'size'>

export interface myIconProps extends IconBaseProps{
  icon?:IconProp
}


export const IconBase:FC<myIconProps> = ({icon=faHouse,className,...props}) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} {...props} />
  )
}
