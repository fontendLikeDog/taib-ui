import React, { FC } from 'react';
import { IconBase, myIconProps } from '../..//IconBase';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const IconLoader:FC<myIconProps> = ({icon=faSpinner,className,...args}) => {
    return <IconBase icon={icon} className={className} {...args} />
}

export default IconLoader;
