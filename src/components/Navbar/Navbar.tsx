import * as React from 'react';
import * as types from './Navbar.types';
import styles from './Navbar.module.scss';
import { LogoIcon } from '../../icons';
import {
    TextBlock
} from '..';

export const Navbar: React.FunctionComponent<types.INavbarProps> = props => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavPanel}>
                <LogoIcon
                    className={styles.LogoIcon}
                    size={32}
                />
                <TextBlock className={styles.HomeText} fontSize={'regular'}>Home</TextBlock>
                <TextBlock className={styles.BlogText} fontSize={'regular'}>Blog</TextBlock>
                <TextBlock className={styles.CorcesText} fontSize={'regular'}>Cources</TextBlock>
            </div>
            <div className={styles.UserInfo}>
                <TextBlock className={styles.LogInText} fontSize={'regular'}>LogIn</TextBlock>
            </div> 
        </div>
    )
}