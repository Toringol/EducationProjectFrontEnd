import { ReactComponent as Logo } from '../assets/logo/logo.svg';
import { ReactComponent as MainPageComposition } from '../assets/pictures/mainPageCompisition.svg';

import { makeIcon } from '../hoc';
export type { TIconComponent } from '../hoc';

export const LogoIcon = makeIcon(Logo);
export const MainPageIcon = makeIcon(MainPageComposition);