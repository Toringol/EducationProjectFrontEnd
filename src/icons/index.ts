import { ReactComponent as Logo } from 'assets/logo/logo.svg';
import { ReactComponent as MainPageComposition } from 'assets/pictures/mainPageCompisition.svg';
import { ReactComponent as Email } from 'assets/icons/emailIcon.svg';
import { ReactComponent as Password } from 'assets/icons/passwordIcon.svg';
import { ReactComponent as User } from 'assets/icons/userIcon.svg';

import { makeIcon } from 'hoc';
export type { TIconComponent } from 'hoc';

export const LogoIcon = makeIcon(Logo);
export const MainPageIcon = makeIcon(MainPageComposition);
export const EmailIcon = makeIcon(Email);
export const PasswordIcon = makeIcon(Password);
export const UserIcon = makeIcon(User);
