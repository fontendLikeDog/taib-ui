import React, { FC } from 'react';
import { IconBase, myIconProps } from '../..//IconBase';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const IconRight:FC<myIconProps> = ({icon=faChevronRight,className,...args}) => {
    return <IconBase icon={icon} className={className} {...args} />
}

export default IconRight;