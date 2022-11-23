// export { default as Avatar} from './Avatar'
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { AvatarProprs } from './Avatar';

import Avatars from "./Avatar";
import { Group } from "./Group";

export { AvatarProprs } from './Avatar';
export { Group } from './Group';

type CompoundedComponent = ForwardRefExoticComponent<
    AvatarProprs & RefAttributes<HTMLSpanElement>
> & {
  Group: typeof Group;
};

const Avatar = Avatars as CompoundedComponent;

Avatar.Group = Group;

export default Avatar;